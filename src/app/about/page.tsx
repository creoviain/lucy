import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/site";
import { CtaBand, Manufacturing, Milestones, Origin, PageHero } from "@/components/sections";
import { Button, Icon, Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Lucy Engineering Works — from a seven-person stenter spares workshop in 1985 to 500+ textile processing machines built in Sachin G.I.D.C., Surat.",
};

const stats = [
  { v: 1985, s: "", k: "Year founded", d: "650 m² workshop, 7 people" },
  { v: 500, s: "+", k: "Machines built", d: "Stenters & processing lines" },
  { v: 3000, s: "", k: "Sq. meter plant", d: "Sachin G.I.D.C., Surat" },
  { v: 40, s: "+", k: "Years of spares", d: "Continuous parts support" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="About"
        label="Company profile"
        title={
          <>
            Four decades
            <br />
            of finishing.
          </>
        }
        intro="From precision spares for other makers' stenters to complete processing lines of our own — every Lucy machine carries the lessons of forty years on mill floors."
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-surface-container-lowest border border-line" data-stagger data-immediate data-delay="0.5">
          {stats.map((s, i) => (
            <div key={s.k} className={`p-5 lg:p-6 border-line ${i % 2 ? "" : "border-r"} lg:border-r lg:last:border-r-0 ${i < 2 ? "border-b lg:border-b-0" : ""}`}>
              <div className="label-tech text-secondary">{s.k}</div>
              <div className="font-display font-semibold text-headline-lg text-primary mt-1">
                <span data-count={s.v} data-immediate data-delay="0.6">
                  {s.v.toLocaleString("en-US")}
                </span>
                {s.s}
              </div>
              <div className="text-body-sm text-on-surface-variant">{s.d}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <Origin index="01" />
      <Milestones index="02" />

      <Section tone="surface">
        <SectionHeader index="03" label="Facility & quality" title="One plant. Every process in-house." />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 relative h-[280px] sm:h-[380px] overflow-hidden border border-line" data-clip>
            <Image src="/images/stenter-hero.jpg" alt="Stenter assembly at the Sachin G.I.D.C. plant" fill sizes="(min-width:1024px) 700px, 100vw" className="object-cover scale-[1.16]" data-parallax />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-4" data-stagger>
            {[
              { i: "verified", t: `${company.certification} quality management`, d: "Documented procedures from thermal calculation to factory acceptance testing." },
              { i: "precision_manufacturing", t: "Fabrication to commissioning", d: "Structural framing, CNC track milling, assembly and 72-hour run-in under one roof." },
              { i: "build", t: "Spares heritage", d: "Pin clips, chains, rollers and nozzles — the business Lucy was founded on, still supplied today." },
              { i: "local_shipping", t: "Despatch from Surat", d: "Sectional breakdown and crating for domestic and export installations." },
            ].map((b) => (
              <div key={b.t} className="flex gap-4 bg-surface-container-low border border-line p-5">
                <Icon name={b.i} className="text-[24px] text-electric" />
                <div className="space-y-1">
                  <div className="font-display font-semibold uppercase">{b.t}</div>
                  <p className="text-body-sm text-on-surface-variant">{b.d}</p>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Button href={company.brochureHref} variant="secondary" icon="download" target="_blank" rel="noopener">
                Company brochure
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Manufacturing index="04" />
      <CtaBand />
    </>
  );
}
