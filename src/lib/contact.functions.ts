import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const INQUIRY_TYPES = [
  "Investor / Funding",
  "Strategic Partnership",
  "Technology Partnership",
  "Enterprise / Business Inquiry",
  "Government / Institutional",
  "Media / Press",
  "Product Inquiry",
  "General Inquiry",
] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  organisation: z.string().trim().min(2, "Please enter your organisation.").max(150),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  type: z.enum(INQUIRY_TYPES),
  message: z
    .string()
    .trim()
    .min(20, "Please provide at least 20 characters.")
    .max(3000, "Message must be under 3000 characters."),
  // Honeypot — must stay empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryInput = z.infer<typeof inquirySchema>;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toBase64Url = (value: string) => {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };

    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
    const recipient = "digitalrenaissancemetaverse@gmail.com";

    if (!lovableApiKey || !connectionKey) {
      console.error("Inquiry email is not configured (missing mail credentials).");
      throw new Error("Enquiry delivery is temporarily unavailable. Please try again later.");
    }

    const lines = [
      ["Name", data.name],
      ["Email", data.email],
      ["Organisation", data.organisation],
      ["Phone / WhatsApp", data.phone || "—"],
      ["Country", data.country || "—"],
      ["Enquiry type", data.type],
    ] as const;

    const html = `<div style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#111">
<h2 style="margin:0 0 16px">New website enquiry — ${escapeHtml(data.type)}</h2>
<table cellpadding="6" style="border-collapse:collapse">
${lines
  .map(
    ([k, v]) =>
      `<tr><td style="color:#666">${escapeHtml(k)}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`,
  )
  .join("")}
</table>
<h3 style="margin:20px 0 6px">Message</h3>
<p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(data.message)}</p>
<p style="margin-top:24px;color:#888;font-size:12px">Sent from digitalrenaissancemetaverse.com enquiry form.</p>
</div>`;

    const subject = `[Enquiry] ${data.type} — ${data.name}${
      data.organisation ? ` (${data.organisation})` : ""
    }`;

    const raw = [
      `To: ${recipient}`,
      `Reply-To: ${data.name} <${data.email}>`,
      `Subject: =?UTF-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
      "MIME-Version: 1.0",
      'Content-Type: text/html; charset="UTF-8"',
      "",
      html,
    ].join("\r\n");

    const response = await fetch(
      "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": connectionKey,
        },
        body: JSON.stringify({ raw: toBase64Url(raw) }),
      },
    );

    if (!response.ok) {
      const body = await response.text();
      console.error(`Gmail send failed [${response.status}]: ${body}`);
      throw new Error("Enquiry delivery failed. Please email us directly.");
    }

    return { ok: true as const };
  });
