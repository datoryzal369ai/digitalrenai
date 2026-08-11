import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, StatusTag } from "@/components/site/primitives";

const title = "Company — Digital Renaissance Metaverse™";
const description =
  "Who we are, our vision and mission, leadership and corporate information for Digital Renaissance Metaverse, a Malaysian AI technology company.";

export const Route = createFileRoute("/company")({
  component: Company,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/company" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
});

function Company() {
  return (
    <>
      <Section className="pt-36">
        <Reveal>
          <SectionHead
            eyebrow="Company"
            title="A Malaysian AI technology company with a global ambition."
            intro="Digital Renaissance Metaverse builds autonomous intelligence systems, vertical AI platforms and digital ecosystems designed to transform how businesses operate and how people are served."
          />
        </Reveal>
      </Section>

      <Section className="border-border border-y">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-xl leading-relaxed">
              To build a new generation of intelligent digital ecosystems where autonomous
              intelligence augments human capability, accelerates businesses and creates meaningful
              economic and social impact.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-xl leading-relaxed">
              To develop proprietary AI systems, vertical intelligence platforms and autonomous
              digital executives that solve real-world problems across high-value industries.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Principles" title="How we build." />
        </Reveal>
        <div className="mt-12 grid gap-px md:grid-cols-3">
          {[
            ["Depth over breadth", "Vertical intelligence before horizontal expansion."],
            ["Governed autonomy", "Human oversight, auditability and controlled learning by design."],
            ["Evidence over claims", "We publish what is verified, and label what is in development."],
          ].map(([h, p]) => (
            <div key={h} className="panel p-7">
              <h3 className="text-lg font-medium">{h}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-border border-y">
        <Reveal>
          <SectionHead eyebrow="Leadership" title="Founder-led, architecture-first." />
        </Reveal>
        <Reveal delay={120}>
          <div className="panel mt-12 max-w-2xl p-8">
            <p className="font-display text-2xl">Dato&apos; Ryzal Jamaludin</p>
            <p className="text-primary mt-2 text-[11px] tracking-[0.2em] uppercase">
              Founder &amp; Executive Director
            </p>
            <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
              Leads the company&apos;s intelligence architecture direction, vertical ecosystem
              strategy and corporate development.
            </p>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="panel mt-6 max-w-2xl p-8">
            <StatusTag tone="muted">Reserved</StatusTag>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Additional leadership, advisory and board profiles will be published as appointments are
              confirmed. We do not list unconfirmed names, titles or affiliations.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Corporate Information" title="Transparency by default." />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              ["Origin", "Malaysia"],
              ["Sector", "Artificial intelligence & vertical software"],
              ["Company registration details", "To be published"],
              ["Registered office", "To be published"],
              ["Certifications & memberships", "To be published when verified"],
              ["Trademark registrations", "Subject to jurisdictional status"],
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
      </Section>
    </>
  );
}
