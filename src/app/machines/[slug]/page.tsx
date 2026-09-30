import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applications, getMachine, machines } from "@/lib/site";
import MachineSchematic from "@/components/MachineSchematic";
import { Enquiry, MachineCard } from "@/components/sections";
import { Button, Icon, IndexLabel, Section, SectionHeader, SpecRow } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = getMachine((await params).slug);
  return m ? { title: m.name, description: m.summary } : {};
}

export default async function MachinePage({ params }: Props) {
  const machine = getMachine((await params).slug);
  if (!machine) notFound();

  const index = machines.indexOf(machine);
  const prev = machines[(index - 1 + machines.length) % machines.length];
  const next = machines[(index + 1) % machines.length];
  const related = machines.filter((m) => m.slug !== machine.slug && m.category === machine.category).concat(machines.filter((m) => m.category !== machine.category)).slice(0, 3);
  const usedIn = applications.filter((a) => a.machines.includes(machine.slug));

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container-low paper-grid px-4 sm:px-6 lg:px-12 pt-12 pb-14 lg:pt-16 lg:pb-20 border-b border-line">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-3 label-tech text-secondary" data-reveal data-immediate>
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/machines" className="hover:text-primary">Machines</Link>
            <span>/</span>
            <span className="text-primary font-bold">{machine.code}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3" data-reveal data-immediate>
                <span className="inline-flex items-center gap-2 bg-ink text-surface px-3 py-1.5 label-tech">
                  <span className="w-1.5 h-1.5 bg-signal" /> {machine.category}
                </span>
                <span className="label-tech text-secondary border border-ink px-3 py-1.5">{machine.process}</span>
              </div>
              <h1 data-split="chars" data-immediate data-delay="0.1" className="text-display-hero-mobile sm:text-[52px] sm:leading-[56px] lg:text-display-hero uppercase text-primary">
                {machine.name}
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl" data-reveal data-immediate data-delay="0.4">
                {machine.intro}
              </p>
              <div className="flex flex-wrap gap-4" data-reveal data-immediate data-delay="0.55">
                <Button href="#enquiry">Request specification</Button>
                <Button href="/machines" variant="secondary" icon="">All machines</Button>
              </div>
            </div>
            <div className="lg:col-span-4 bg-surface-container-lowest border border-line p-6" data-reveal data-immediate data-delay="0.35">
              <div className="flex items-center justify-between mb-3">
                <span className="label-tech text-secondary">Key parameters</span>
                <span className="label-tech text-electric">{machine.code}</span>
              </div>
              {machine.specs.slice(0, 4).map((s) => (
                <SpecRow key={s.label} {...s} />
              ))}
            </div>
          </div>

          <div className="relative bg-ink overflow-hidden" data-clip data-immediate data-delay="0.25">
            {machine.image ? (
              <div className="relative h-[260px] sm:h-[380px] lg:h-[480px]">
                <Image src={machine.image} alt={`${machine.name} by Lucy Engineering`} fill priority sizes="(min-width:1280px) 1216px, 100vw" className="object-cover scale-[1.16]" data-parallax />
              </div>
            ) : (
              <div className="blueprint-grid p-6 sm:p-10 lg:p-14">
                <MachineSchematic schematic={machine.schematic} label={machine.name} />
              </div>
            )}
            <div className="absolute bottom-4 left-4 bg-surface-container-lowest/95 px-4 py-2 border border-line">
              <div className="label-tech text-secondary">{machine.image ? "Plant photograph" : "Schematic view"}</div>
              <div className="font-display font-semibold uppercase text-[15px]">{machine.name}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section tone="surface">
        <IndexLabel index="01">Engineering overview</IndexLabel>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-body-lg text-on-surface-variant" data-stagger>
            {machine.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            {usedIn.length > 0 && (
              <div className="pt-2 space-y-3">
                <div className="label-tech text-secondary">Used in fabric applications</div>
                <div className="flex flex-wrap gap-2">
                  {usedIn.map((a) => (
                    <Link key={a.title} href={`/applications#${a.title.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex items-center gap-2 bg-surface-container-low border border-ink px-3 py-1.5 label-tech hover:bg-ink hover:text-surface transition-colors">
                      <Icon name={a.icon} className="text-[16px]" /> {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-5" data-reveal>
            <div className="bg-surface-container-lowest border border-ink">
              <div className="bg-ink text-surface px-5 py-3 flex justify-between label-tech">
                <span>Specification sheet</span>
                <span className="text-electric-soft">{machine.code}</span>
              </div>
              <div className="p-5">
                {machine.specs.map((s) => (
                  <SpecRow key={s.label} {...s} />
                ))}
                <div className="pt-4 space-y-2">
                  <div className="label-tech text-secondary">Suitable fabrics</div>
                  <div className="flex flex-wrap gap-2">
                    {machine.fabrics.map((f) => (
                      <span key={f} className="bg-surface-container-low border border-line px-2.5 py-1 label-tech">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="pt-4 text-body-sm text-secondary">Final parameters are configured per mill requirement. Request a detailed specification for your fabric.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section tone="low">
        <SectionHeader index="02" label="Engineered features" title="What sets it apart." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
          {machine.features.map((f, i) => (
            <div key={f.title} className="bg-surface-container-lowest border border-line p-6 space-y-3 hover:border-ink transition-colors">
              <div className="label-tech text-electric font-bold">Feature 0{i + 1}</div>
              <h3 className="text-headline-sm uppercase text-primary">{f.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{f.text}</p>
            </div>
          ))}
        </div>
        {machine.image && (
          <div className="bg-ink blueprint-grid p-6 sm:p-10" data-reveal>
            <div className="label-tech text-muted-dark mb-4">Schematic view • {machine.name}</div>
            <MachineSchematic schematic={machine.schematic} label={machine.name} />
          </div>
        )}
      </Section>

      {/* Related */}
      <Section tone="surface">
        <SectionHeader index="03" label="Complete the line" title="Related machines." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
          {related.map((m) => (
            <MachineCard key={m.slug} code={m.code} name={m.name} summary={m.summary} specs={m.specs.slice(0, 3)} href={`/machines/${m.slug}`} />
          ))}
        </div>
        <div className="grid grid-cols-2 border border-line">
          <Link href={`/machines/${prev.slug}`} className="group p-5 border-r border-line hover:bg-surface-container-low transition-colors">
            <div className="label-tech text-secondary">← Previous</div>
            <div className="font-display font-semibold uppercase mt-1 group-hover:text-electric">{prev.name}</div>
          </Link>
          <Link href={`/machines/${next.slug}`} className="group p-5 text-right hover:bg-surface-container-low transition-colors">
            <div className="label-tech text-secondary">Next →</div>
            <div className="font-display font-semibold uppercase mt-1 group-hover:text-electric">{next.name}</div>
          </Link>
        </div>
      </Section>

      <Enquiry index="04" defaultMachine={machine.name} />
    </>
  );
}
