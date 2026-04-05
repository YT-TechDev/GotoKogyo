// app/api/contact/route.ts

import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log("VALIDATION ERROR");
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const res = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: "問い合わせ",
      html: `
        <p>名前: ${name}</p>
        <p>メール: ${email}</p>
        <p>内容: ${message}</p>
      `,
    });

    console.log("RESEND RESULT:", res);

    return Response.json({ ok: true });

  } catch (err) {
    console.error("ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}