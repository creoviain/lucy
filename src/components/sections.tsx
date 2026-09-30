import Image from "next/image";
import Link from "next/link";
import {
  applications,
  company,
  components,
  getMachine,
  homeMachineCards,
  milestones,
  processFlow,
  relaxSpecs,
  stages,
  telemetry,
} from "@/lib/site";
import EnquiryForm from "./EnquiryForm";
import { Button, GhostLink, Icon, IndexLabel, Pip, Section, SectionHeader, SpecRow } from "./ui";

/* 00 — Hero ------------------------------------------------------------ */
export function Hero() {
  return (
    <section className="relative w-full bg-surface-container-low paper-grid px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 label-tech text-secondary">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-electric" />
            <span data-scramble data-immediate>
              {company.name} — an {company.certification} certified facility
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-on-surface-variant">
            <span>{company.coords}</span>
            <span className="text-outline-variant">/</span>
            <span>Sachin G.I.D.C., Surat industrial zone</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="label-tech text-on-surface-variant flex items-center gap-2" data-reveal data-immediate>
              <span className="w-8 h-px bg-on-surface" />
              Heavy industrial textile processing systems
            </div>
            <h1
              data-split="chars"
              data-immediate
              data-delay="0.15"
              className="text-display-hero-mobile sm:text-[52px] sm:leading-[56px] lg:text-display-hero uppercase text-primary"
            >
              Engineering
              <br />
              the finish.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl" data-reveal data-immediate data-delay="0.5">
              Precision thermodynamic textile processing machinery engineered for high-uptime fabric applications. Designed, fabricated, and
              rigorously commissioned in Surat since 1985.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2" data-reveal data-immediate data-delay="0.65">
              <Button href="/machines">Explore machines</Button>
              <Button href="/contact" variant="secondary" icon="">
                Request a quote
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-lowest border border-line p-6 flex flex-col justify-between gap-6" data-reveal data-immediate data-delay="0.4">
            <div className="flex items-center justify-between">
              <span className="label-tech text-secondary">Metric telemetry</span>
              <span className="label-tech text-electric flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-electric animate-pulse" /> Running 24/7
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="label-tech text-secondary">Global installed base</div>
                <div className="text-headline-xl font-display font-semibold text-primary">
                  <span data-count="500" data-immediate data-delay="0.5">500</span>+
                </div>
                <div className="text-body-sm text-on-surface-variant">Continuous Hot Air Stenters &amp; Processing Lines</div>
              </div>
              <div className="bg-surface-container-low p-4 space-y-1">
                <div className="flex justify-between items-center label-tech text-secondary">
                  <span>Plant footprint</span>
                  <span className="text-on-surface font-bold">3,000 sq. meters</span>
                </div>
                <div className="flex justify-between items-center label-tech text-secondary">
                  <span>Primary hub</span>
                  <span className="text-on-surface font-bold">Surat, Gujarat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-surface-container-high overflow-hidden relative h-[300px] sm:h-[380px] lg:h-[500px]" data-clip data-immediate data-delay="0.3">
          <Image
            src="/images/stenter-hero.jpg"
            alt="Heavy-duty multi-chamber textile stenter machine inside the Lucy Engineering plant"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover scale-[1.16]"
            data-parallax
          />
          <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 max-w-md border border-line">
            <div className="label-tech text-secondary">Flagship range</div>
            <div className="font-display font-semibold text-[15px] sm:text-headline-sm uppercase text-primary">Multi-chamber textile finishing stenter</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 bg-surface-container-lowest border border-line" data-stagger>
          {[
            { k: "Founded", v: "1985", s: "650 m² Precision Spares Workshop" },
            { k: "Milestone", v: "1992", s: "1st Stenter Built • Surat Plant" },
            { k: "Fleet volume", v: "500+ Machines", s: "Active Global Textile Mills" },
            { k: "Production site", v: "Sachin G.I.D.C.", s: "Surat, Gujarat, India" },
          ].map((d, i) => (
            <div key={d.k} className={`flex flex-col p-5 lg:p-6 border-line ${i % 2 ? "" : "border-r"} md:border-r ${i < 2 ? "border-b md:border-b-0" : ""} md:last:border-r-0`}>
              <span className="label-tech text-secondary">{d.k}</span>
              <span className="font-display font-semibold text-headline-sm text-primary uppercase mt-1">{d.v}</span>
              <span className="text-body-sm text-on-surface-variant">{d.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Page hero for inner pages ------------------------------------------- */
export function PageHero({ index, label, title, intro, children }: { index: string; label: string; title: React.ReactNode; intro: string; children?: React.ReactNode }) {
  return (
    <section className="relative w-full bg-surface-container-low paper-grid px-4 sm:px-6 lg:px-12 pt-14 pb-14 lg:pt-20 lg:pb-20 border-b border-line">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex items-center gap-3 label-tech text-secondary" data-reveal data-immediate>
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-primary font-bold">{index}</span>
          <span data-scramble data-immediate>{label}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h1 data-split="chars" data-immediate data-delay="0.1" className="lg:col-span-8 text-display-hero-mobile sm:text-[52px] sm:leading-[56px] lg:text-display-hero uppercase text-primary">
            {title}
          </h1>
          <p className="lg:col-span-4 text-body-lg text-on-surface-variant" data-reveal data-immediate data-delay="0.45">
            {intro}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

/* 01 — Origin ---------------------------------------------------------- */
export function Origin({ index = "01" }: { index?: string }) {
  return (
    <Section tone="surface">
      <IndexLabel index={index}>Company origin &amp; capability</IndexLabel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <h2 data-split="lines" className="text-headline-xl-mobile md:text-headline-xl text-primary uppercase">
            From components to complete machines.
          </h2>
          <div className="bg-surface-container-low border border-line p-6" data-reveal>
            <div className="label-tech text-secondary mb-2">Verified statement</div>
            <blockquote className="text-body-md text-on-surface italic">
              “Lucy&apos;s innovation and initiative spirit always strives for continuous contribution to industry in terms of new product
              development and sustained efforts to deliver the most efficient, user-friendly processing machinery.”
            </blockquote>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center gap-6 text-body-lg text-on-surface-variant" data-stagger>
          <p>
            Lucy Engineering commenced industrial operations in a compact <strong className="text-primary font-semibold">650 sq. meter workshop in 1985</strong> with a
            dedicated, small workforce of only seven people. In our formative years, the enterprise focused purely on manufacturing high-stress,
            precision replacement spares required for stenter frames and continuous finishing plant machinery.
          </p>
          <p>
            Through rigorous metallurgical mastery and deep field-service insight, in <strong className="text-primary font-semibold">1992</strong> Lucy Engineering engineered
            and manufactured its <strong className="text-primary font-semibold">First Complete Stenter Machine</strong>. The unit was received with immediate acclaim across
            competitive textile processing clusters.
          </p>
          <p>
            Following widespread industrial validation, the firm scaled directly into an expansive{" "}
            <strong className="text-primary font-semibold">3,000 sq. meter heavy engineering plant</strong> situated in the strategic Sachin G.I.D.C. belt of Surat.
            Today, with over <strong className="text-primary font-semibold">500 complete Stenters and processing machinery systems</strong> commissioned, Lucy
            Engineering stands as a cornerstone of Indian textile machinery engineering.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            {[
              { i: "verified", t: `${company.certification} certified`, c: "text-electric" },
              { i: "shield", t: "IndiaMART TrustSeal verified", c: "" },
              { i: "lock_clock", t: "Payment protected gateway", c: "" },
            ].map((b) => (
              <div key={b.t} className="flex items-center gap-3 bg-surface-container border border-line px-4 py-2.5">
                <Icon name={b.i} className={`text-[20px] ${b.c}`} />
                <span className="label-tech text-on-surface">{b.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* 02 — Milestones ------------------------------------------------------ */
export function Milestones({ index = "02" }: { index?: string }) {
  return (
    <Section tone="low">
      <div className="flex items-center justify-between gap-4">
        <IndexLabel index={index}>Industrial milestones</IndexLabel>
        <span className="label-tech text-secondary hidden sm:block">Chronology 1985 — present</span>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute left-0 right-0 top-0 h-px bg-ink" data-bar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:pt-6" data-stagger>
          {milestones.map((m) => (
            <div key={m.year} className="bg-surface-container-lowest border border-line p-6 flex flex-col justify-between gap-6 hover:border-ink transition-colors">
              <div className="space-y-2">
                <span className="font-display text-headline-lg font-semibold text-primary uppercase">{m.year}</span>
                <div className="label-tech text-electric">{m.title}</div>
              </div>
              <p className="text-body-sm text-on-surface-variant">{m.text}</p>
              <div className="label-tech text-secondary">{m.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* 03 — Machines grid --------------------------------------------------- */
export function MachineCard({ code, name, summary, specs, href }: { code: string; name: string; summary: string; specs: { label: string; value: string }[]; href: string }) {
  return (
    <Link
      href={href}
      className="group relative bg-surface-container-lowest border border-line p-6 lg:p-8 flex flex-col justify-between hover:border-ink hover:bg-surface-container-low transition-colors"
    >
      <span className="absolute left-0 top-0 h-[2px] w-full bg-electric scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="label-tech text-secondary">Code: {code}</span>
          <span className="w-2 h-2 bg-primary group-hover:bg-electric transition-colors" />
        </div>
        <h3 className="text-headline-lg uppercase text-primary">{name}</h3>
        <p className="text-body-sm text-on-surface-variant">{summary}</p>
        <div className="pt-2">
          {specs.map((s) => (
            <SpecRow key={s.label} {...s} />
          ))}
        </div>
      </div>
      <div className="pt-8 inline-flex items-center gap-2 font-display font-semibold text-headline-sm uppercase text-primary group-hover:text-electric transition-colors">
        <span>View specifications</span>
        <Icon name="arrow_forward" className="text-[16px] transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function MachinesGrid({ index = "03" }: { index?: string }) {
  return (
    <Section tone="surface" id="machines">
      <SectionHeader
        index={index}
        label="Portfolio specification"
        title="The machines behind the process."
        aside={
          <p className="text-body-md text-on-surface-variant max-w-md">
            Industrial continuous open-width drying, heat-setting, and wet processing machinery engineered for woven, knitted, terry towel, and
            technical textile mills.
          </p>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
        {homeMachineCards.map((c) => (
          <MachineCard key={c.code} {...c} />
        ))}
      </div>
    </Section>
  );
}

/* 04 — Anatomy --------------------------------------------------------- */
export function Anatomy({ index = "04" }: { index?: string }) {
  const markers = [
    { pos: "top-10 left-12", k: "PT 01 • Inlet section", v: "Automatic Chain Lubrication & Pinning" },
    { pos: "top-20 right-16", k: "PT 02 • Thermal core", v: "Multi-Pass Nozzle Flow Chambers" },
    { pos: "bottom-10 right-24", k: "PT 03 • Outlet desk", v: "Controlled Tension Batching / Plaiting" },
  ];
  return (
    <Section tone="low" id="anatomy">
      <SectionHeader
        index={index}
        label="Anatomy & systems"
        title="Control the width. Control the finish."
        aside={
          <div className="flex items-center gap-3 bg-surface-container-lowest border border-line px-4 py-2">
            <span className="label-tech text-secondary">Flagship chassis</span>
            <span className="label-tech text-primary font-bold">Hot air stenter</span>
          </div>
        }
      />
      <div className="bg-surface-container-lowest border border-line p-4 sm:p-6 lg:p-10 flex flex-col gap-10">
        <div className="relative w-full overflow-hidden bg-ink p-3 lg:p-8" data-reveal>
          <div className="relative h-[240px] sm:h-[340px] lg:h-[460px] overflow-hidden" data-clip>
            <Image
              src="/images/stenter-side.jpg"
              alt="Side view of a Lucy Engineering stenter showing inlet guides, heat chambers and drive motors"
              fill
              sizes="(min-width: 1280px) 1100px, 100vw"
              className="object-cover mix-blend-luminosity opacity-90 scale-[1.16]"
              data-parallax
            />
          </div>
          {markers.map((m, i) => (
            <div key={m.k} className={`hidden lg:block absolute ${m.pos} bg-surface-container-lowest p-3 border-l-2 border-electric`} data-reveal data-delay={0.2 + i * 0.15}>
              <div className="label-tech text-electric font-bold">{m.k}</div>
              <div className="text-body-sm text-on-surface font-semibold">{m.v}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
          {[
            { k: "Mechanical guide", t: "Heavy-duty track & pin clips", d: "Cast-iron track rails with graphite slide shoes ensure continuous running at up to 100 m/min with minimal maintenance downtime and automatic oil injection." },
            { k: "Fabric stability", t: "Bow & skew weft control", d: "Integrated multi-roll mechanical and optical weft straighteners eliminate diagonal distortion, delivering uniform pick count across the entire usable width." },
            { k: "Thermodynamics", t: "Aerodynamic air circulation", d: "Independent upper and lower blowers provide balanced impingement airflow, preventing fabric sag and securing precise heat setting up to 225°C." },
          ].map((a) => (
            <div key={a.t} className="space-y-2 bg-surface-container-low p-5">
              <div className="label-tech text-secondary">{a.k}</div>
              <div className="font-display font-semibold text-headline-sm text-primary uppercase">{a.t}</div>
              <p className="text-body-sm text-on-surface-variant">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* 05 — Automation (dark) ---------------------------------------------- */
export function Automation({ index = "05" }: { index?: string }) {
  const chambers = ["Pre-heat", "Evaporation", "Drying", "Heat-setting", "Heat-setting", "Cool-down"];
  return (
    <Section tone="ink" className="blueprint-grid" id="automation">
      <SectionHeader
        dark
        index={index}
        label="Process automation"
        title="Every variable. Under control."
        aside={<div className="label-tech text-electric-soft max-w-xs">[Control system architecture: PLC / touch screen operator console]</div>}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-stagger>
        {telemetry.map((t) => (
          <div key={t.param} className="bg-ink-raised border border-ink-line p-6 space-y-4 hover:border-electric-soft transition-colors">
            <div className="flex justify-between items-center label-tech text-muted-dark">
              <span>Parameter {t.param}</span>
              <span className="w-2 h-2 bg-electric-soft" />
            </div>
            <div className="space-y-1">
              <div className="text-body-sm text-muted-dark uppercase">{t.label}</div>
              <div className="font-display text-headline-lg font-semibold text-surface">{t.value}</div>
            </div>
            <div className="w-full bg-ink-line h-1.5 overflow-hidden">
              <div className="bg-electric-soft h-full" style={{ width: `${t.pct}%` }} data-bar />
            </div>
            <div className="text-body-sm text-muted-dark">{t.text}</div>
          </div>
        ))}
      </div>
      <div className="bg-ink-raised border border-ink-line p-6 lg:p-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 label-tech text-muted-dark">
          <span>Dynamic heat curve • Chambers 1 through 6</span>
          <span className="text-surface font-bold">Monitored real-time thermic fluid return: 214°C</span>
        </div>
        <div className="w-full h-28">
          <svg className="w-full h-full text-electric-soft" fill="none" preserveAspectRatio="none" viewBox="0 0 900 120" data-draw aria-hidden>
            {[30, 60, 90].map((y) => (
              <line key={y} x1="0" x2="900" y1={y} y2={y} stroke="#262626" strokeWidth="1" />
            ))}
            <path d="M0,100 C150,95 250,30 400,28 C550,26 650,45 750,40 C820,36 860,32 900,30" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-center label-tech text-muted-dark pt-2">
          {chambers.map((c, i) => (
            <div key={i}>
              CH 0{i + 1}: {c}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* 06 — Relax dryer specs ---------------------------------------------- */
export function RelaxSpecs({ index = "06" }: { index?: string }) {
  return (
    <Section tone="surface">
      <SectionHeader
        index={index}
        label="Verified machine data"
        title="Dry without compromising the fabric."
        aside={
          <Link href="/machines/relax-dryer-machine" className="label-tech text-secondary hover:text-electric">
            Model: Relax dryer machine series →
          </Link>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
        {relaxSpecs.map((s) => (
          <div key={s.label} className={`bg-surface-container-low border border-line p-6 lg:p-8 space-y-4 ${s.wide ? "md:col-span-2" : ""}`}>
            <span className="label-tech text-secondary">{s.label}</span>
            <div className="font-display text-headline-lg font-semibold text-primary uppercase">{s.value}</div>
            <p className="text-body-sm text-on-surface-variant">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 07 — Components ------------------------------------------------------ */
export function Components({ index = "07" }: { index?: string }) {
  return (
    <Section tone="low">
      <SectionHeader
        index={index}
        label="Metallurgy & tooling"
        title="The machine is in the details."
        aside={
          <p className="text-body-md text-on-surface-variant max-w-sm">
            Originating as a specialized spare parts supplier in 1985, our in-house metallurgical standards remain the uncompromising core of every
            machine we assemble.
          </p>
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
        {components.map((c) => (
          <div key={c.code} className="bg-surface-container-lowest border border-line p-6 flex flex-col justify-between gap-4 hover:border-ink transition-colors">
            <div className="space-y-2">
              <span className="label-tech text-secondary">{c.code}</span>
              <h4 className="text-headline-sm uppercase text-primary">{c.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{c.text}</p>
            </div>
            <div className="label-tech text-secondary">{c.tag}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 08 — Manufacturing --------------------------------------------------- */
export function Manufacturing({ index = "08" }: { index?: string }) {
  return (
    <Section tone="surface">
      <SectionHeader index={index} label="Manufacturing rigor" title="Built in Surat. Engineered for textiles." aside={<div className="label-tech text-secondary">ISO 9001:2015 protocol compliant</div>} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
        {stages.map((s, i) => (
          <div key={s.title} className="bg-surface-container-low border border-line p-6 space-y-3">
            <div className="label-tech text-electric font-bold">Stage 0{i + 1}</div>
            <h4 className="text-headline-sm uppercase text-primary">{s.title}</h4>
            <p className="text-body-sm text-on-surface-variant">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 09 — Applications strip --------------------------------------------- */
export function ApplicationsStrip({ index = "09" }: { index?: string }) {
  return (
    <Section tone="low">
      <div className="flex items-center justify-between gap-4">
        <IndexLabel index={index}>Mill &amp; fabric applications</IndexLabel>
        <GhostLink href="/applications">All applications</GhostLink>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" data-stagger>
        {applications.map((a) => (
          <Link
            key={a.title}
            href={`/applications#${a.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="group bg-surface-container-lowest border border-line p-5 lg:p-6 text-center space-y-2 hover:bg-ink hover:border-ink transition-colors"
          >
            <Icon name={a.icon} className="text-[32px] text-primary group-hover:text-electric-soft transition-colors" />
            <div className="font-display font-semibold text-[16px] sm:text-headline-sm uppercase text-primary group-hover:text-surface transition-colors">{a.title}</div>
            <div className="label-tech text-secondary group-hover:text-muted-dark">{a.tag}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* Fabric ticker ------------------------------------------------------- */
export function FabricMarquee() {
  const items = ["Stentering", "Heat-setting", "Relax drying", "Padding", "Float drying", "Cylinder drying", "Shade dyeing", "Selvedge cutting", "Direct gas heating", "Tumble drying"];
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center gap-8 pr-8 font-display font-semibold uppercase text-[28px] sm:text-headline-lg text-surface whitespace-nowrap">
          {t}
          <span className="w-2 h-2 bg-signal" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="bg-ink overflow-hidden py-5 border-y border-ink-line" aria-hidden>
      <div className="flex w-max" data-marquee data-speed="45">
        {row}
        {row}
      </div>
    </div>
  );
}

/* Process flow — greige to finished fabric ----------------------------- */
export function ProcessFlow({ index = "02" }: { index?: string }) {
  return (
    <Section tone="ink" className="blueprint-grid">
      <SectionHeader
        dark
        index={index}
        label="Wet processing route"
        title="From greige to finished fabric."
        aside={<p className="text-body-md text-muted-dark max-w-sm">Where each Lucy machine sits in a typical fabric processing house.</p>}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 border-t border-l border-ink-line" data-stagger>
        {processFlow.map((p) => {
          const m = p.machine ? getMachine(p.machine) : undefined;
          return (
            <div key={p.step} className="relative p-5 border-r border-b border-ink-line flex flex-col gap-4 min-h-[220px]">
              <div className="flex items-center justify-between label-tech text-muted-dark">
                <span>Step {p.step}</span>
                <Pip color={m ? "electric" : "signal"} />
              </div>
              <h4 className="text-headline-sm uppercase text-surface">{p.title}</h4>
              <p className="text-body-sm text-muted-dark">{p.text}</p>
              {m && (
                <Link href={`/machines/${m.slug}`} className="mt-auto label-tech text-electric-soft hover:text-surface">
                  {m.name} →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* 10 — Enquiry --------------------------------------------------------- */
export function Enquiry({ index = "10", defaultMachine }: { index?: string; defaultMachine?: string }) {
  return (
    <Section tone="surface" id="enquiry">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <IndexLabel index={index}>Direct despatch &amp; consultation</IndexLabel>
            <h2 data-split="lines" className="text-headline-xl-mobile md:text-headline-xl text-primary uppercase">
              Start an engineering conversation.
            </h2>
            <p className="text-body-md text-on-surface-variant" data-reveal>
              Connect with our senior mechanical and thermodynamic engineering leads in Sachin G.I.D.C., Surat. We configure custom working widths,
              chamber capacities, and fuel integrations based directly on your processing requirements.
            </p>
          </div>
          <div className="bg-surface-container-low border border-line p-6 space-y-6" data-reveal>
            <div className="space-y-1">
              <div className="label-tech text-secondary">Direct phone desk</div>
              <a className="font-display text-headline-lg font-semibold text-primary hover:text-electric transition-colors" href={company.phoneHref}>
                {company.phone}
              </a>
              <div className="text-body-sm text-on-surface-variant">Verified IndiaMART TrustSeal Line</div>
            </div>
            <div className="space-y-1">
              <div className="label-tech text-secondary">Manufacturing works</div>
              <div className="text-body-md text-on-surface font-semibold uppercase">{company.name}</div>
              <a href={company.mapsHref} target="_blank" rel="noopener" className="text-body-sm text-on-surface-variant hover:text-electric">
                {company.address} ↗
              </a>
            </div>
            <div className="space-y-1">
              <div className="label-tech text-secondary">Facility specification</div>
              <div className="text-body-sm text-on-surface-variant">3,000 Sq. Meter Dedicated Heavy Engineering &amp; Testing Works</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 bg-surface-container-low border border-line p-6 sm:p-8 lg:p-12" data-reveal>
          <EnquiryForm defaultMachine={defaultMachine} />
        </div>
      </div>
    </Section>
  );
}

/* CTA band ------------------------------------------------------------ */
export function CtaBand() {
  return (
    <section className="bg-electric text-white px-4 sm:px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-3">
          <div className="label-tech text-white/70">Configured to your mill</div>
          <h2 data-split="lines" className="text-headline-xl-mobile md:text-headline-xl uppercase max-w-3xl">
            Tell us the fabric. We&apos;ll engineer the line.
          </h2>
        </div>
        <div className="flex flex-wrap gap-4" data-reveal>
          <Button href="/contact" variant="light">Request a quote</Button>
          <a href={company.phoneHref} className="inline-flex items-center px-8 py-4 border border-white font-display font-semibold uppercase tracking-wider hover:bg-white hover:text-electric transition-colors">
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
