import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL!,
    pass: process.env.PASS!,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;
    if (!message) return NextResponse.json({ error: 'Message can not be empty!' }, { status: 400 });
    const mailOptions = {
      from: process.env.EMAIL!,
      to: process.env.EMAIL!,
      subject: 'Portfoilio Message',
      html: `${message}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Message sent.' }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
