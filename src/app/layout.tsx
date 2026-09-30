import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lucyengineering.com"),
  title: {
    default: "Lucy Engineering Works — Textile Processing Machinery, Surat",
    template: "%s — Lucy Engineering Works",
  },
  description:
    "Stenter machines, relax dryers, 3 bowl mangles, drying ranges and heating systems for fabric processing mills. ISO 9001:2015 certified manufacturer in Sachin G.I.D.C., Surat since 1985.",
  keywords: ["stenter machine", "relax dryer", "textile processing machinery", "fabric finishing", "Surat", "heat setting", "3 bowl mangle"],
  icons: { icon: "/images/lucy-logo.png" },
};

export const viewport: Viewport = { themeColor: "#faf9f5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}>
      <head>
        {/* Marks JS as available so animated elements start hidden until GSAP reveals them */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Icon font uses display=block so ligature names never flash as text */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-ink text-surface px-4 py-2 label-tech">
          Skip to content
        </a>
        <Header />
        <div id="content">{children}</div>
      </body>
    </html>
  );
}
