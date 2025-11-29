import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(req: NextRequest) {
  const { message } = await req.json();

  await resend.emails.send({
 from: "Portfolio Notifications <portfolio@resend.dev>",
    to: "prabuddhapg12@gmail.com",
    subject: "New Portfolio Chat Message",
    html: `<p>${message}</p>`,
  });

  return NextResponse.json({ status: "ok" });
}
