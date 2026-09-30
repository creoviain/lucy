import type { Metadata } from "next";
import { machines } from "@/lib/site";
import { CtaBand, MachineCard, PageHero, ProcessFlow } from "@/components/sections";
import { Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Product Range",
  description: "Stenter machines, batching stenters, 3 bowl mangles with float dryers, relax dryers, drying ranges, shade dyeing, selvedge cutting, gas direct heating and tumbler dryers.",
};

const groups = [
  { id: "finishing", label: "Heat-setting & finishing", cats: ["Heat-Setting & Finishing"] },
  { id: "wet", label: "Padding, dyeing & drying", cats: ["Padding & Pre-Drying", "Dyeing", "Drying"] },
  { id: "auxiliary", label: "Auxiliary & heating systems", cats: ["Auxiliary", "Heating"] },
];

export default function MachinesPage() {
  return (
    <>
      <PageHero
        index="Machines"
        label="Product range"
        title={
          <>
            The machines
            <br />
            behind the process.
          </>
        }
        intro="Nine machine lines covering padding, drying, heat-setting and finishing — each configured to your fabric, working width and heating medium."
      />
      {groups.map((g, gi) => (
        <Section key={g.id} id={g.id} tone={gi % 2 ? "low" : "surface"}>
          <SectionHeader index={`0${gi + 1}`} label={g.label} title={g.label} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
            {machines
              .filter((m) => g.cats.includes(m.category))
              .map((m) => (
                <MachineCard key={m.slug} code={m.code} name={m.name} summary={m.summary} specs={m.specs.slice(0, 3)} href={`/machines/${m.slug}`} />
              ))}
          </div>
        </Section>
      ))}
      <ProcessFlow index="04" />
      <CtaBand />
    </>
  );
}
