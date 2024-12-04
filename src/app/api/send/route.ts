// /app/api/send/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, handle, select, message } = await request.json();

    const { data } = await resend.emails.send({
      from: 'GrowthPartner <onboarding@resend.dev>',
      to: 'subasictimur@gmail.com',
      subject: `New Submission from ${name}`,
      html: `
        <div>
          <h1>Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Handle:</strong> ${handle}</p>
          <p><strong>Followers:</strong> ${select}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
