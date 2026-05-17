import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { error: "Name, email and message are all required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const gmailUser = process.env.NEXT_PUBLIC_GMAIL_USER;
  const gmailAppPassword = process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD;
  const recipient = process.env.NEXT_PUBLIC_CONTACT_RECIPIENT || "jayesh.wadhonkar@gmail.com";

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: missing GMAIL_USER or GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "Mail service is not configured on the server." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const subject = `Portfolio contact from ${name}`;

  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  const initial = name.trim().charAt(0).toUpperCase() || "?";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safeSubmittedAt = escapeHtml(submittedAt);
  const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Re: ${subject}`
  )}`;

  const textBody = [
    `New portfolio contact`,
    `Received: ${submittedAt} IST`,
    ``,
    `From:    ${name} <${email}>`,
    `Length:  ${wordCount} word${wordCount === 1 ? "" : "s"}`,
    ``,
    `Message`,
    `-------`,
    message,
    ``,
    `Reply directly to this email to respond to ${name}.`,
  ].join("\n");

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light only" />
    <meta name="supported-color-schemes" content="light only" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0; padding:0; background:#0f0f17; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#1f2937;">
    <span style="display:none; max-height:0; overflow:hidden; opacity:0; color:transparent;">
      ${safeName} sent you a new message through your portfolio &mdash; ${wordCount} word${wordCount === 1 ? "" : "s"}.
    </span>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0f0f17; padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px; width:100%; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 20px 50px rgba(15, 23, 42, 0.35);">

            <!-- Header / brand band -->
            <tr>
              <td style="background:linear-gradient(135deg,#7c3aed 0%,#3b82f6 50%,#ec4899 100%); background-color:#7c3aed; padding:28px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#ffffff;">
                      <div style="font-size:12px; letter-spacing:2px; text-transform:uppercase; opacity:0.85; margin-bottom:6px;">Jayesh Wadhonkar &middot; Portfolio</div>
                      <div style="font-size:24px; font-weight:700; line-height:1.2;">New contact form submission</div>
                    </td>
                    <td align="right" valign="top" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                      <span style="display:inline-block; padding:6px 12px; background:rgba(255,255,255,0.18); color:#ffffff; border-radius:999px; font-size:11px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase;">New</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Sender card -->
            <tr>
              <td style="padding:28px 32px 8px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td width="56" valign="top" style="padding-right:16px;">
                      <div style="width:56px; height:56px; line-height:56px; text-align:center; background:linear-gradient(135deg,#7c3aed,#3b82f6); background-color:#7c3aed; color:#ffffff; font-weight:700; font-size:22px; border-radius:50%; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                        ${escapeHtml(initial)}
                      </div>
                    </td>
                    <td valign="middle" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                      <div style="font-size:18px; font-weight:600; color:#0f172a; line-height:1.3;">${safeName}</div>
                      <div style="font-size:14px; color:#475569; margin-top:2px;">
                        <a href="mailto:${safeEmail}" style="color:#7c3aed; text-decoration:none;">${safeEmail}</a>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Meta strip -->
            <tr>
              <td style="padding:16px 32px 4px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #e5e7eb; border-bottom:1px solid #e5e7eb;">
                  <tr>
                    <td style="padding:14px 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                      <div style="font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:#64748b; margin-bottom:4px;">Received</div>
                      <div style="font-size:14px; color:#0f172a; font-weight:500;">${safeSubmittedAt} <span style="color:#64748b; font-weight:400;">IST</span></div>
                    </td>
                    <td align="right" style="padding:14px 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                      <div style="font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:#64748b; margin-bottom:4px;">Length</div>
                      <div style="font-size:14px; color:#0f172a; font-weight:500;">${wordCount} word${wordCount === 1 ? "" : "s"}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message body -->
            <tr>
              <td style="padding:20px 32px 8px 32px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                <div style="font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:#64748b; margin-bottom:10px;">Message</div>
                <div style="position:relative; background:#f8fafc; border-left:4px solid #7c3aed; border-radius:10px; padding:18px 20px; font-size:15px; line-height:1.65; color:#1f2937; white-space:pre-wrap; word-break:break-word;">${safeMessage}</div>
              </td>
            </tr>

            <!-- Reply CTA -->
            <tr>
              <td align="center" style="padding:24px 32px 8px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="background:linear-gradient(135deg,#7c3aed,#3b82f6); background-color:#7c3aed; border-radius:999px;">
                      <a href="${replyHref}" style="display:inline-block; padding:12px 28px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:15px; font-weight:600; color:#ffffff; text-decoration:none;">
                        Reply to ${safeName} &rarr;
                      </a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:10px; font-size:12px; color:#64748b; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                  Tip: hitting Reply also works &mdash; the visitor's address is set as the reply-to.
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:24px 32px 28px 32px; border-top:1px solid #f1f5f9; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="font-size:12px; color:#94a3b8;">
                      Sent from the contact form on
                      <a href="https://jayeshwadhonkar.vercel.app/" style="color:#7c3aed; text-decoration:none;">jayeshwadhonkar.vercel.app</a>
                    </td>
                    <td align="right" style="font-size:12px; color:#94a3b8;">
                      &copy; ${new Date().getFullYear()} Jayesh Wadhonkar
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    await transporter.sendMail({
      from: `Portfolio Contact <${gmailUser}>`,
      to: recipient,
      replyTo: `${name} <${email}>`,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again later." },
      { status: 502 }
    );
  }
}
