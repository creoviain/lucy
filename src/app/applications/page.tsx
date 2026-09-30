import type { Metadata } from "next";
import Link from "next/link";
import { applications, getMachine } from "@/lib/site";
import { CtaBand, PageHero, ProcessFlow } from "@/components/sections";
import { Icon, Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Applications",
  description: "Processing routes and recommended machines for woven, knitted, denim, terry towel, technical and home furnishing fabrics.",
};

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        index="Applications"
        label="Mill & fabric applications"
        title={
          <>
            Built around
            <br />
            the fabric.
          </>
        }
        intro="Wovens, knits, denim, towels and technical textiles each need a different processing route. Find the machines that fit yours."
      >
        <div className="flex flex-wrap gap-2" data-stagger data-immediate data-delay="0.5">
          {applications.map((a) => (
            <a key={a.title} href={`#${a.title.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center gap-2 bg-surface-container-lowest border border-ink px-3 py-2 label-tech hover:bg-ink hover:text-surface transition-colors">
              <Icon name={a.icon} className="text-[16px]" /> {a.title}
            </a>
          ))}
        </div>
      </PageHero>

      <Section tone="surface">
        <SectionHeader index="01" label="Fabric classes" title="Process routes by fabric." />
        <div className="flex flex-col border-t border-ink">
          {applications.map((a, i) => (
            <article key={a.title} id={a.title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-line" data-reveal>
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="label-tech text-secondary">0{i + 1}</span>
                  <Icon name={a.icon} className="text-[28px]" />
                </div>
                <h3 className="text-headline-lg uppercase text-primary">{a.title}</h3>
                <div className="label-tech text-electric">{a.tag}</div>
                <p className="text-body-md text-on-surface-variant">{a.challenge}</p>
              </div>
              <div className="lg:col-span-5 space-y-3">
                <div className="label-tech text-secondary">Typical processing route</div>
                <ol className="flex flex-col">
                  {a.route.map((r, k) => (
                    <li key={r} className="flex items-center gap-4 py-2 border-b border-line">
                      <span className="font-mono text-label-technical text-secondary w-6">{String(k + 1).padStart(2, "0")}</span>
                      <span className="text-body-md">{r}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="lg:col-span-3 space-y-3">
                <div className="label-tech text-secondary">Recommended machines</div>
                <div className="flex flex-col gap-2">
                  {a.machines.map((slug) => {
                    const m = getMachine(slug)!;
                    return (
                      <Link key={slug} href={`/machines/${slug}`} className="group flex items-center justify-between bg-surface-container-low border border-line px-4 py-3 hover:border-ink hover:bg-ink hover:text-surface transition-colors">
                        <span className="font-display font-semibold uppercase text-[14px]">{m.name}</span>
                        <Icon name="arrow_forward" className="text-[16px] transition-transform group-hover:translate-x-1" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <ProcessFlow index="02" />
      <CtaBand />
    </>
  );
}
