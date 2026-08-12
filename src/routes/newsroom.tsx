import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, StatusTag } from "@/components/site/primitives";

const title = "Newsroom — Digital Renaissance Metaverse™";
const description =
  "Company announcements, technology milestones and media resources from Digital Renaissance Metaverse.";

export const Route = createFileRoute("/newsroom")({
  component: Newsroom,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/newsroom" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/newsroom" }],
  }),
});

function Newsroom() {
  return (
    <>
      <Section className="pt-36">
        <Reveal>
          <SectionHead
            eyebrow="Newsroom"
            title="Announcements published only when confirmed."
            intro="This newsroom is live and ready. We do not publish placeholder press releases, unconfirmed milestones or unverified media coverage."
            as="h1"
          />
        </Reveal>
      </Section>

      <Section className="border-border border-y">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Company Announcements", "Corporate milestones, appointments and structural news."],
            ["Technology Milestones", "RÉNAI.CORE™ and platform development updates."],
            ["Media Resources", "Brand assets, logo usage and company boilerplate."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 100}>
              <div className="panel h-full p-7">
                <StatusTag tone="muted">No entries yet</StatusTag>
                <h3 className="font-display mt-6 text-lg">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="panel p-8">
            <p className="eyebrow">Media Enquiries</p>
            <p className="mt-4 max-w-xl leading-relaxed">
              For interviews, briefings or company information, contact our corporate communications
              channel.
            </p>
            <Link
              to="/contact"
              className="border-primary/50 text-primary hover:bg-primary/10 mt-7 inline-flex rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
            >
              Contact Communications
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
