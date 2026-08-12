import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, FlowChain } from "@/components/site/primitives";

const title = "National & Social Impact — Digital Renaissance Metaverse™";
const description =
  "How Digital Renaissance Metaverse aims to contribute to digital economy growth, AI talent development, SME modernisation and responsible AI adoption.";

export const Route = createFileRoute("/impact")({
  component: Impact,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
});

function Impact() {
  return (
    <>
      <Section className="pt-36">
        <Reveal>
          <SectionHead
            eyebrow="National & Social Impact"
            title="Technology built for the real economy."
            intro="Our intent is that vertical intelligence strengthens the businesses and communities it serves. The commitments below describe direction and intent, not completed outcomes."
            as="h1"
          />
        </Reveal>
      </Section>

      <Section className="border-border border-y">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Digital Economy Growth", "Raise the operating capability of service businesses through applied intelligence."],
            ["AI Talent Development", "Build engineering and applied-AI capability around a domestic intelligence core."],
            ["SME Modernisation", "Give smaller agencies enterprise-grade operating leverage."],
            ["Industry Digital Transformation", "Move whole verticals from fragmented tools to coherent ecosystems."],
            ["Innovation Leadership", "Advance vertical autonomous intelligence from Malaysia outward."],
            ["Responsible AI Adoption", "Govern autonomy with oversight, auditability and clear boundaries."],
          ].map(([h, p], i) => (
            <Reveal key={h} delay={i * 80}>
              <div className="panel h-full p-7">
                <h3 className="font-display text-sm tracking-[0.14em] uppercase">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Path to Impact" title="Sequenced, measurable, verifiable." />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <FlowChain
              steps={[
                "Vertical Depth",
                "Agency Productivity",
                "Sector Modernisation",
                "Talent & Capability",
                "Regional Contribution",
              ]}
            />
          </div>
        </Reveal>
        <p className="text-muted-foreground mt-8 text-xs">
          Impact metrics will be published once independently measurable. No customer results,
          endorsements or partnership claims are presented on this site prior to verification.
        </p>
      </Section>
    </>
  );
}
