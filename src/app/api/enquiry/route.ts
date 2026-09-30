import { NextResponse } from "next/server";

const required = ["name", "company", "phone", "email"] as const;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  for (const key of required) {
    if (typeof body[key] !== "string" || !(body[key] as string).trim()) {
      return NextResponse.json({ error: `Please fill in ${key}.` }, { status: 422 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email as string)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  // TODO: forward to the sales inbox / CRM (e.g. SMTP, Resend, IndiaMART lead API).
  console.log("[enquiry]", {
    name: body.name,
    company: body.company,
    phone: body.phone,
    email: body.email,
    machine: body.machine,
    width: body.width,
    message: body.message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
