"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { company, machines, nav } from "@/lib/site";
import { Icon } from "./ui";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  // Close menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-head-item]", { y: -16, autoAlpha: 0, duration: 0.7, ease: "power3.out", stagger: 0.05, delay: 0.1 });
      });

      menuTl.current = gsap
        .timeline({ paused: true })
        .fromTo(menuRef.current, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.55, ease: "expo.inOut" })
        .from("[data-menu-item]", { yPercent: 110, duration: 0.5, ease: "expo.out", stagger: 0.04 }, "-=0.2");
    },
    { scope: headerRef },
  );

  useEffect(() => {
    const tl = menuTl.current;
    if (!tl) return;
    if (open) tl.play();
    else tl.reverse();
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${hidden && !open ? "-translate-y-full" : ""}`}
    >
      <div
        className={`relative z-10 border-b transition-colors duration-300 ${
          scrolled || open ? "bg-surface/95 backdrop-blur-md border-[#e5e4de]" : "bg-surface/80 backdrop-blur-sm border-transparent"
        }`}
      >
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0" data-head-item aria-label={`${company.short} home`}>
            <Image src="/images/lucy-logo.png" alt="Lucy Engineering Works logo" width={224} height={79} priority className="h-8 w-auto" />
            <div className="hidden sm:flex flex-col border-l border-outline-variant pl-3">
              <span className="font-display font-semibold text-headline-sm uppercase tracking-tight leading-none">Lucy Engineering</span>
              <span className="label-tech text-secondary mt-1 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 bg-primary" />
                Engineering since 1985
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {nav.map((item) =>
              item.href === "/machines" ? (
                <div key={item.href} className="relative group" data-head-item>
                  <NavLink href={item.href} label={item.label} active={isActive(item.href)} />
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-200">
                    <div className="w-[560px] bg-surface-container-lowest border border-line grid grid-cols-2">
                      {machines.map((m) => (
                        <Link
                          key={m.slug}
                          href={`/machines/${m.slug}`}
                          className="group/item p-4 border-b border-r border-line [&:nth-child(2n)]:border-r-0 hover:bg-surface-container-low transition-colors"
                        >
                          <div className="label-tech text-secondary">{m.code}</div>
                          <div className="font-display font-semibold text-[15px] uppercase mt-1 group-hover/item:text-electric transition-colors">
                            {m.name}
                          </div>
                        </Link>
                      ))}
                      <Link href="/machines" className="p-4 bg-ink text-surface label-tech flex items-center justify-between hover:bg-electric transition-colors">
                        All machines <Icon name="arrow_forward" className="text-[16px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={item.href} data-head-item>
                  <NavLink href={item.href} label={item.label} active={isActive(item.href)} />
                </div>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <div className="hidden xl:flex flex-col items-end" data-head-item>
              <span className="label-tech text-secondary">Direct Dial</span>
              <a className="font-display text-label-metric font-semibold tracking-wider hover:text-electric transition-colors" href={company.phoneHref}>
                {company.phone}
              </a>
            </div>
            <Link
              href="/contact"
              data-head-item
              className="hidden sm:inline-flex items-center bg-ink text-on-primary label-tech px-5 py-3 hover:bg-electric transition-colors"
            >
              Request a quote →
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-ink"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              data-head-item
            >
              <Icon name={open ? "close" : "menu"} className="text-[22px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-ink text-surface overflow-y-auto ${open ? "" : "pointer-events-none"}`}
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
        aria-hidden={!open}
      >
        <div className="px-4 sm:px-6 py-8 flex flex-col gap-10 min-h-full">
          <ul className="flex flex-col">
            {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
              <li key={item.href} className="overflow-hidden border-b border-ink-line">
                <Link
                  href={item.href}
                  data-menu-item
                  tabIndex={open ? 0 : -1}
                  className={`flex items-baseline gap-4 py-4 font-display font-semibold text-headline-lg uppercase ${
                    (item.href === "/" ? pathname === "/" : isActive(item.href)) ? "text-electric-soft" : ""
                  }`}
                >
                  <span className="label-tech text-muted-dark">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            {machines.map((m) => (
              <div key={m.slug} className="overflow-hidden">
                <Link
                  data-menu-item
                  tabIndex={open ? 0 : -1}
                  href={`/machines/${m.slug}`}
                  className="block py-2 label-tech text-muted-dark hover:text-surface"
                >
                  {m.name}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a href={company.phoneHref} tabIndex={open ? 0 : -1} className="font-display font-semibold text-headline-lg">
              {company.phone}
            </a>
            <Link href="/contact" tabIndex={open ? 0 : -1} className="bg-surface text-ink label-tech px-5 py-4 text-center">
              Request a quote →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative label-tech py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-primary after:origin-left after:transition-transform after:duration-300 ${
        active ? "text-primary after:scale-x-100" : "text-on-surface-variant hover:text-on-surface after:scale-x-0 hover:after:scale-x-100"
      }`}
    >
      {label}
    </Link>
  );
}
