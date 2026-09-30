"use client";

import { useState } from "react";
import { machines } from "@/lib/site";
import { Icon } from "./ui";

const field =
  "w-full bg-surface-container-lowest border border-line px-4 py-3 text-on-surface text-body-md outline-none focus:border-electric transition-colors placeholder:text-outline";
const label = "label-tech text-secondary";

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm({ defaultMachine }: { defaultMachine?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Could not send enquiry");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send enquiry");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-6 py-10" role="status">
        <div className="flex items-center gap-2 label-tech text-electric">
          <span className="w-1.5 h-1.5 bg-electric" /> Transmission received
        </div>
        <h3 className="text-headline-lg uppercase">Engineering enquiry logged.</h3>
        <p className="text-body-md text-on-surface-variant max-w-md">
          Our technical desk will call you on the number provided to discuss your fabric, width and heating requirements.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="self-start label-tech border border-ink px-5 py-3 hover:bg-ink hover:text-surface transition-colors">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={label}>Full name *</label>
          <input id="name" name="name" className={field} placeholder="e.g. Rajesh Singhania" required type="text" autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={label}>Mill / company name *</label>
          <input id="company" name="company" className={field} placeholder="e.g. Apex Synthetics Mill" required type="text" autoComplete="organization" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={label}>Phone number *</label>
          <input id="phone" name="phone" className={field} placeholder="+91 98XXX XXXXX" required type="tel" autoComplete="tel" pattern="[0-9+\s\-()]{8,}" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={label}>Corporate email *</label>
          <input id="email" name="email" className={field} placeholder="procurement@mill.com" required type="email" autoComplete="email" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="machine" className={label}>Required machine</label>
          <select id="machine" name="machine" className={field} defaultValue={defaultMachine ?? machines[0].name}>
            {machines.map((m) => (
              <option key={m.slug}>{m.name}</option>
            ))}
            <option>Custom Spares &amp; Overhaul</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="width" className={label}>Desired working width (mm)</label>
          <input id="width" name="width" className={field} placeholder="e.g. 1800 mm / 3200 mm" type="text" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={label}>Fabric specification &amp; production requirements</label>
        <textarea
          id="message"
          name="message"
          className={`${field} resize-none`}
          rows={4}
          placeholder="Detail your fabric composition (GSM, woven/knit), existing heating medium (thermic oil/gas/steam), speed requirements, and intended plant commissioning timeline..."
        />
      </div>
      {status === "error" && (
        <p className="label-tech text-signal" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="label-tech text-secondary">• Direct factory quote • Non-disclosure guaranteed</div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-ink text-on-primary font-display font-semibold text-headline-sm uppercase tracking-wider hover:bg-electric transition-colors disabled:opacity-60"
        >
          <span>{status === "sending" ? "Transmitting…" : "Send engineering enquiry"}</span>
          <Icon name="arrow_forward" className="text-[18px] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
