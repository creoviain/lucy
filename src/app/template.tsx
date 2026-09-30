"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { initMotion } from "@/components/motion/initMotion";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

/** Re-mounts on every navigation, so each page gets fresh scroll-driven animations. */
export default function Template({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const mm = initMotion(root.current);
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <main className="pt-20 min-h-[60vh]">{children}</main>
      <Footer />
    </div>
  );
}
