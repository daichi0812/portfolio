import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

if (!resendApiKey) {
  throw new Error("環境変数 RESEND_API_KEY が設定されていません。");
}

if (!fromEmail) {
  throw new Error("環境変数 FROM_EMAIL が設定されていません。");
}

const resend = new Resend(resendApiKey);

interface RequestBody {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request): Promise<Response> {
  const { email, subject, message } = (await req.json()) as RequestBody;
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail as string,
      to: [toEmail as string, email],
      subject: subject,
      html: `
          <h2>${subject}</h2>
          <p>お問い合わせありがとうございます！</p>
          <p>新しいメッセージが送信されました：</p>
          <p>${message}</p>
      `,
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: "不明なエラーが発生しました。" });
    }
  }
}