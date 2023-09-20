import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message;
    if (!message) return NextResponse.json({ error: 'Message can not be empty!' }, { status: 400 });
    const mailOptions = {
      from: EMAIL,
      to: EMAIL,
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
