import type { Metadata } from "next";
import { company, faqs } from "@/lib/site";
import { Enquiry, PageHero } from "@/components/sections";
import { Icon, Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact / Enquiry",
  description: "Request a quote for stenters, dryers and textile processing machinery. Call 08047810588 or visit us at Sachin G.I.D.C., Surat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="Contact"
        label="Enquiry desk"
        title={
          <>
            Talk to the
            <br />
            engineers.
          </>
        }
        intro="Share your fabric, working width and heating medium. Our technical desk replies with a configured machine proposal."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 border border-line bg-surface-container-lowest" data-stagger data-immediate data-delay="0.5">
          <a href={company.phoneHref} className="group p-6 border-b md:border-b-0 md:border-r border-line hover:bg-ink hover:text-surface transition-colors">
            <Icon name="call" className="text-[24px] text-electric" />
            <div className="label-tech text-secondary mt-3">Call us</div>
            <div className="font-display font-semibold text-headline-sm mt-1">{company.phone}</div>
          </a>
          <a href={company.mapsHref} target="_blank" rel="noopener" className="group p-6 border-b md:border-b-0 md:border-r border-line hover:bg-ink hover:text-surface transition-colors">
            <Icon name="location_on" className="text-[24px] text-electric" />
            <div className="label-tech text-secondary mt-3">Visit the works</div>
            <div className="font-display font-semibold text-headline-sm mt-1">Sachin G.I.D.C., Surat ↗</div>
          </a>
          <a href={company.brochureHref} target="_blank" rel="noopener" className="group p-6 hover:bg-ink hover:text-surface transition-colors">
            <Icon name="download" className="text-[24px] text-electric" />
            <div className="label-tech text-secondary mt-3">Download</div>
            <div className="font-display font-semibold text-headline-sm mt-1">Company brochure ↗</div>
          </a>
        </div>
      </PageHero>

      <Enquiry index="01" />

      <Section tone="low">
        <SectionHeader index="02" label="Frequently asked" title="Before you enquire." />
        <div className="border-t border-ink" data-stagger>
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="font-display font-semibold uppercase text-[16px] sm:text-headline-sm">{f.q}</span>
                <Icon name="add" className="text-[22px] transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pb-6 max-w-3xl text-body-md text-on-surface-variant">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
