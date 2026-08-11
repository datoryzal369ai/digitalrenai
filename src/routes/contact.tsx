import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";
import { INQUIRY_TYPES, inquirySchema, submitInquiry } from "@/lib/contact.functions";

const title = "Contact — Digital Renaissance Metaverse™";
const description =
  "Start a strategic conversation with Digital Renaissance Metaverse: investor relations, partnerships, platform briefings, media and careers.";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const fieldClass =
  "border-border bg-background/60 focus:border-primary mt-2 w-full rounded-sm border px-4 py-3 text-sm outline-none";
const labelClass = "text-muted-foreground text-[10px] tracking-[0.2em] uppercase";

const textFields = [
  { id: "name", label: "Full name *", type: "text", autoComplete: "name" },
  { id: "email", label: "Email address *", type: "email", autoComplete: "email" },
  { id: "organisation", label: "Organisation / Company *", type: "text", autoComplete: "organization" },
  { id: "phone", label: "Phone / WhatsApp", type: "tel", autoComplete: "tel" },
  { id: "country", label: "Country", type: "text", autoComplete: "country-name" },
] as const;

function Contact() {
  const send = useServerFn(submitInquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(
      ["name", "email", "organisation", "phone", "country", "type", "message", "website"].map(
        (k) => [k, String(fd.get(k) ?? "")],
      ),
    );

    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setFormError("Please correct the highlighted fields.");
      setStatus("idle");
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <>
      <Section className="pt-36">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHead
              eyebrow="Contact"
              title="Start a strategic conversation."
              intro="Tell us who you are and what you're exploring. Enquiries are routed to the relevant corporate channel."
            />
            <div className="mt-10 space-y-3">
              {[
                ["Corporate", "Digital Renaissance Metaverse™"],
                ["Origin", "Malaysia"],
                ["Enquiries", "digitalrenaissancemetaverse@gmail.com"],
                ["Registered office", "To be published"],
              ].map(([k, v]) => (
                <div key={k} className="panel flex items-baseline justify-between gap-4 px-5 py-4">
                  <span className="text-muted-foreground text-[10px] tracking-[0.18em] uppercase">
                    {k}
                  </span>
                  <span className="text-right text-sm break-all">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="panel p-7 sm:p-9" onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {textFields.map((f) => (
                  <div key={f.id} className={f.id === "country" ? "" : undefined}>
                    <label htmlFor={f.id} className={labelClass}>
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      maxLength={255}
                      aria-invalid={Boolean(errors[f.id])}
                      className={fieldClass}
                    />
                    {errors[f.id] && (
                      <p className="mt-1.5 text-xs text-red-400">{errors[f.id]}</p>
                    )}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="type" className={labelClass}>
                    Enquiry type *
                  </label>
                  <select id="type" name="type" defaultValue={INQUIRY_TYPES[0]} className={fieldClass}>
                    {INQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={3000}
                    aria-invalid={Boolean(errors["message"])}
                    className={`${fieldClass} resize-none`}
                  />
                  {errors["message"] && (
                    <p className="mt-1.5 text-xs text-red-400">{errors["message"]}</p>
                  )}
                </div>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-7 w-full rounded-sm px-6 py-4 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                    ? "Enquiry Sent"
                    : "Submit Enquiry"}
              </button>

              <p aria-live="polite" className="text-muted-foreground mt-4 text-xs">
                {status === "sent"
                  ? "Thank you — your enquiry has been delivered to our corporate channel. We will respond to the email address provided."
                  : formError ||
                    "Your details are sent directly to our corporate enquiries channel."}
              </p>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
