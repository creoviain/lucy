import type { Metadata } from "next";
import { heatingMedia } from "@/lib/site";
import { Anatomy, Automation, Components, CtaBand, PageHero } from "@/components/sections";
import { Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Technology",
  description: "Stenter anatomy, PLC process automation, heating media and precision components behind Lucy Engineering textile processing machines.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        index="Technology"
        label="Systems & chambers"
        title={
          <>
            Thermodynamics,
            <br />
            engineered.
          </>
        }
        intro="Airflow, temperature, tension and overfeed decide how a fabric finishes. Here is how Lucy machines control each one."
      />
      <Anatomy index="01" />
      <Automation index="02" />

      <Section tone="surface">
        <SectionHeader
          index="03"
          label="Heating media"
          title="Choose the heat source for your mill."
          aside={<p className="text-body-md text-on-surface-variant max-w-sm">Every Lucy stenter and dryer can be configured for thermic fluid, direct gas or steam.</p>}
        />
        <div className="overflow-x-auto border border-line" data-reveal>
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-ink text-surface">
              <tr className="label-tech">
                <th className="p-4 font-normal">Medium</th>
                <th className="p-4 font-normal">Process temperature</th>
                <th className="p-4 font-normal">Strength</th>
                <th className="p-4 font-normal">Consideration</th>
              </tr>
            </thead>
            <tbody className="bg-surface-container-lowest">
              {heatingMedia.map((h) => (
                <tr key={h.name} className="border-t border-line hover:bg-surface-container-low transition-colors">
                  <td className="p-4 font-display font-semibold uppercase text-headline-sm">{h.name}</td>
                  <td className="p-4 font-mono text-label-metric">{h.temp}</td>
                  <td className="p-4 text-body-sm text-on-surface-variant">{h.pros}</td>
                  <td className="p-4 text-body-sm text-secondary">{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Components index="04" />
      <CtaBand />
    </>
  );
}
