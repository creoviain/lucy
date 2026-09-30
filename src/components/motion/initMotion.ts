import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, ScrambleTextPlugin);

const all = <T extends Element = HTMLElement>(root: Element, sel: string) =>
  Array.from(root.querySelectorAll<T & Element>(sel)) as unknown as T[];

/** Scroll trigger config, or none for elements marked `data-immediate` (above the fold). */
const trigger = (el: Element, start = "top 88%") =>
  el.hasAttribute("data-immediate") ? undefined : { trigger: el, start, once: true };

const delayOf = (el: HTMLElement) => parseFloat(el.dataset.delay ?? "0");

/**
 * Declarative motion layer. Markup opts in with data attributes:
 *   data-split="chars|lines"   masked typographic reveal (SplitText)
 *   data-reveal                fade + rise
 *   data-stagger               children fade + rise in sequence
 *   data-count="500"           number counter (optional data-suffix)
 *   data-scramble              mono label scramble-in
 *   data-draw                  draws every <path> in an SVG
 *   data-bar                   horizontal bar grows from the left
 *   data-clip                  image wipe reveal
 *   data-parallax              scrubbed image drift
 *   data-marquee               infinite horizontal ticker (child track duplicated in markup)
 * Add data-immediate to play on load instead of on scroll, and data-delay="0.2" to offset.
 */
export function initMotion(root: HTMLElement) {
  const mm = gsap.matchMedia();

  mm.add(
    { reduce: "(prefers-reduced-motion: reduce)", motion: "(prefers-reduced-motion: no-preference)" },
    (ctx) => {
      if (ctx.conditions?.reduce) return;

      all(root, "[data-split]").forEach((el) => {
        const chars = el.dataset.split === "chars";
        SplitText.create(el, {
          type: chars ? "lines,words,chars" : "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit(self) {
            gsap.set(el, { autoAlpha: 1 });
            return gsap.from(chars ? self.chars : self.lines, {
              yPercent: 115,
              rotate: chars ? 6 : 0,
              duration: chars ? 1 : 1.1,
              ease: "expo.out",
              stagger: chars ? 0.022 : 0.09,
              delay: delayOf(el),
              scrollTrigger: trigger(el),
            });
          },
        });
      });

      all(root, "[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", delay: delayOf(el), scrollTrigger: trigger(el, "top 92%") },
        );
      });

      all(root, "[data-stagger]").forEach((el) => {
        gsap.fromTo(
          el.children,
          { autoAlpha: 0, y: 36 },
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: delayOf(el), scrollTrigger: trigger(el, "top 86%") },
        );
      });

      all(root, "[data-count]").forEach((el) => {
        const end = parseFloat(el.dataset.count ?? "0");
        const suffix = el.dataset.suffix ?? "";
        const state = { v: 0 };
        gsap.to(state, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          delay: delayOf(el),
          scrollTrigger: trigger(el, "top 92%"),
          onUpdate: () => {
            el.textContent = Math.round(state.v).toLocaleString("en-US") + suffix;
          },
        });
      });

      all(root, "[data-scramble]").forEach((el) => {
        el.dataset.text ??= el.textContent ?? "";
        gsap.fromTo(
          el,
          { scrambleText: { text: " ", chars: "" } },
          {
            duration: 1.2,
            delay: delayOf(el),
            ease: "none",
            scrambleText: { text: el.dataset.text, chars: "01<>/_#+×", speed: 0.5 },
            scrollTrigger: trigger(el, "top 94%"),
          },
        );
      });

      all(root, "[data-draw]").forEach((el) => {
        const shapes = "path, line, polyline, rect, circle, ellipse";
        const solid = el.querySelectorAll(shapes.split(", ").map((s) => `${s}:not([stroke-dasharray])`).join(", "));
        const dashed = el.querySelectorAll(shapes.split(", ").map((s) => `${s}[stroke-dasharray]`).join(", "));
        const tl = gsap.timeline({ delay: delayOf(el), scrollTrigger: trigger(el, "top 85%") });
        tl.from(solid, { drawSVG: "0%", duration: 1.8, ease: "power2.inOut", stagger: 0.04 });
        if (dashed.length) tl.from(dashed, { opacity: 0, duration: 0.6, stagger: 0.03 }, "-=0.8");
      });

      all(root, "[data-bar]").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.4,
          ease: "expo.out",
          delay: delayOf(el),
          scrollTrigger: trigger(el, "top 95%"),
        });
      });

      all(root, "[data-clip]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut", delay: delayOf(el), scrollTrigger: trigger(el, "top 85%") },
        );
      });

      all(root, "[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      all(root, "[data-marquee]").forEach((el) => {
        gsap.to(el, { xPercent: -50, duration: parseFloat(el.dataset.speed ?? "40"), ease: "none", repeat: -1 });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
  );

  return mm;
}
