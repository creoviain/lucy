import Link from "next/link";
import { company, machines, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-inverse-on-surface border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-12">
        <div className="overflow-hidden border-b border-ink-line pb-10 mb-12">
          <p
            data-split="chars"
            className="font-display font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2.75rem,11vw,9.5rem)] text-surface"
          >
            Engineering the finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-ink-line">
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="font-display font-semibold text-headline-sm text-white uppercase tracking-tight">{company.name}</div>
              <div className="label-tech text-[#c8c6c5]">Textile processing machinery • Est. 1985</div>
              <p className="text-body-sm text-surface-container-highest max-w-sm pt-2">
                Pioneering precision thermodynamic machinery and finishing ranges for global textile operations. Engineered for high uptime,
                thermal efficiency, and rigorous metallurgy.
              </p>
              <p className="text-body-sm text-muted-dark max-w-sm">{company.address}</p>
            </div>
            <div className="inline-flex items-center gap-2 border border-[#333333] px-3 py-1.5 w-fit">
              <span className="w-2 h-2 bg-electric-soft" />
              <span className="label-tech text-surface">{company.certification} certified manufacturing facility</span>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <div className="label-tech text-[#c8c7c1] border-b border-ink-line pb-2">Navigation</div>
            <ul className="space-y-2.5 text-body-sm">
              <li>
                <Link className="text-surface-container-highest hover:text-white transition-colors" href="/">
                  Home
                </Link>
              </li>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link className="text-surface-container-highest hover:text-white transition-colors" href={n.href}>
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <a className="text-surface-container-highest hover:text-white transition-colors" href={company.brochureHref} target="_blank" rel="noopener">
                  Company Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="label-tech text-[#c8c7c1] border-b border-ink-line pb-2">Product Catalog</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-2.5 text-body-sm">
              {machines.map((m) => (
                <li key={m.slug}>
                  <Link className="text-surface-container-highest hover:text-white transition-colors" href={`/machines/${m.slug}`}>
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 label-tech text-secondary">
          <div>© {new Date().getFullYear()} Lucy Engineering Works Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="text-surface-container-highest">Verified despatch portal</span>
            <a className="text-white hover:underline" href={company.phoneHref}>
              Tel: {company.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
