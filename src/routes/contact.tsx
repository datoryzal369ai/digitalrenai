import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, Section, SectionHead } from "@/components/site/primitives";

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

const enquiries = [
  "Investor Relations",
  "Strategic Partnership",
  "Platform Briefing",
  "Media & Press",
  "Careers",
  "General Enquiry",
];

function Contact() {
  const [sent, setSent] = useState(false);

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
                ["Contact details", "To be published"],
                ["Registered office", "To be published"],
              ].map(([k, v]) => (
                <div key={k} className="panel flex items-baseline justify-between gap-4 px-5 py-4">
                  <span className="text-muted-foreground text-[10px] tracking-[0.18em] uppercase">
                    {k}
                  </span>
                  <span className="text-right text-sm">{v}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="panel p-7 sm:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { id: "name", label: "Full name", type: "text", span: false },
                  { id: "org", label: "Organisation", type: "text", span: false },
                  { id: "email", label: "Email", type: "email", span: false },
                  { id: "phone", label: "Phone", type: "tel", span: false },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.id === "name" || f.id === "email"}
                      className="border-border bg-background/60 focus:border-primary mt-2 w-full rounded-sm border px-4 py-3 text-sm outline-none"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="type"
                    className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase"
                  >
                    Enquiry type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="border-border bg-background/60 focus:border-primary mt-2 w-full rounded-sm border px-4 py-3 text-sm outline-none"
                  >
                    {enquiries.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="border-border bg-background/60 focus:border-primary mt-2 w-full resize-none rounded-sm border px-4 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-7 w-full rounded-sm px-6 py-4 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                Submit Enquiry
              </button>

              <p aria-live="polite" className="text-muted-foreground mt-4 text-xs">
                {sent
                  ? "Thank you — your enquiry has been recorded locally. Message delivery is not yet connected."
                  : "This form is not yet connected to a delivery channel."}
              </p>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
