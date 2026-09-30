import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span aria-hidden className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

export function Section({
  children,
  tone = "surface",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "surface" | "low" | "ink";
  className?: string;
  id?: string;
}) {
  const tones = {
    surface: "bg-surface",
    low: "bg-surface-container-low",
    ink: "bg-ink text-surface",
  };
  return (
    <section id={id} className={`w-full px-4 sm:px-6 lg:px-12 py-16 lg:py-24 scroll-mt-20 ${tones[tone]} ${className}`}>
      <Container className="flex flex-col gap-12 lg:gap-14">{children}</Container>
    </section>
  );
}

/** "01 / COMPANY ORIGIN" index label. */
export function IndexLabel({ index, children, dark = false }: { index?: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 label-tech ${dark ? "text-muted-dark" : "text-secondary"}`} data-reveal>
      {index && <span className={`font-bold ${dark ? "text-surface" : "text-primary"}`}>{index}</span>}
      {index && <span>/</span>}
      <span>{children}</span>
    </div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  aside,
  dark = false,
}: {
  index?: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="space-y-3 max-w-3xl">
        <IndexLabel index={index} dark={dark}>
          {label}
        </IndexLabel>
        <h2
          data-split="lines"
          className={`text-headline-xl-mobile md:text-headline-xl uppercase ${dark ? "text-surface" : "text-primary"}`}
        >
          {title}
        </h2>
      </div>
      {aside && <div data-reveal>{aside}</div>}
    </div>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; icon?: string } & Omit<
  ComponentProps<typeof Link>,
  "href" | "children"
>;

export function Button({ href, children, variant = "primary", icon = "arrow_forward", className = "", ...rest }: BtnProps) {
  const styles = {
    primary: "bg-ink text-on-primary border-ink hover:bg-electric hover:border-electric",
    secondary: "bg-surface-container-lowest text-primary border-ink hover:bg-ink hover:text-surface",
    light: "bg-surface text-ink border-surface hover:bg-electric hover:border-electric hover:text-white",
  };
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 border font-display font-semibold text-[15px] sm:text-headline-sm uppercase tracking-wider transition-colors duration-200 ${styles[variant]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {icon && <Icon name={icon} className="text-[18px] transition-transform duration-200 group-hover:translate-x-1" />}
    </Link>
  );
}

export function GhostLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link
      href={href}
      className={`group/ghost inline-flex items-center gap-2 font-display font-semibold text-headline-sm uppercase transition-colors ${
        dark ? "text-surface hover:text-electric-soft" : "text-primary hover:text-electric"
      }`}
    >
      <span>{children}</span>
      <Icon name="arrow_forward" className="text-[16px] transition-transform duration-200 group-hover/ghost:translate-x-1" />
    </Link>
  );
}

export function SpecRow({ label, value, dark = false }: { label: string; value: string; dark?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 py-2 border-b ${dark ? "border-ink-line" : "border-line"} label-tech`}>
      <span className={dark ? "text-muted-dark" : "text-secondary"}>{label}</span>
      <span className={`text-right font-bold ${dark ? "text-surface" : "text-on-surface"}`}>{value}</span>
    </div>
  );
}

export function Pip({ color = "electric", className = "" }: { color?: "electric" | "signal" | "ink"; className?: string }) {
  const c = { electric: "bg-electric", signal: "bg-signal", ink: "bg-primary" }[color];
  return <span className={`inline-block w-1.5 h-1.5 ${c} ${className}`} />;
}
