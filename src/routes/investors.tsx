import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, StatusTag, FlowChain } from "@/components/site/primitives";

const title = "Investors & Strategic Partners — Digital Renaissance Metaverse™";
const description =
  "Investor readiness, strategic roadmap and partnership pathways for Digital Renaissance Metaverse, builder of RÉNAI.CORE™ and vertical autonomous AI platforms.";

export const Route = createFileRoute("/investors")({
  component: Investors,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/investors" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
  }),
});

const phases = [
  ["Phase 1", "Core Intelligence Development", "RÉNAI.CORE™ architecture and evaluation foundations."],
  ["Phase 2", "First Vertical Deployment", "UMRAIO® within the UMRAVERSE® ecosystem."],
  ["Phase 3", "Market Expansion", "Deepen the Umrah vertical and broaden agency adoption."],
  ["Phase 4", "Multi-Vertical Rollout", "WORVERSE® and MEDIVERSE® ecosystem activation."],
  ["Phase 5", "Ecosystem Scaling", "Cross-ecosystem intelligence and platform APIs."],
  ["Phase 6", "Regional & Global Growth", "ASEAN, GCC / MENA and beyond."],
];

function Investors() {
  return (
    <>
      <Section className="pt-36">
        <Reveal>
          <SectionHead
            eyebrow="Investors & Strategic Partners"
            title="An architecture company building category infrastructure."
            intro="We present structure, strategy and status — not projections. Financial figures, traction metrics and partnership names are published only when verified."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Proprietary Core", "RÉNAI.CORE™ is reusable intelligence infrastructure across verticals."],
              ["Vertical Depth", "Domain knowledge is the defensible layer, not the model."],
              ["Autonomous Execution", "Value delivered as completed work, not recommendations."],
              ["Governed by Design", "Oversight and auditability built into the architecture."],
            ].map(([h, p]) => (
              <div key={h} className="panel p-6">
                <h3 className="font-display text-primary text-sm tracking-[0.14em] uppercase">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="border-border border-y">
        <Reveal>
          <SectionHead eyebrow="Strategic Roadmap" title="Six phases, sequenced by proof." />
        </Reveal>
        <div className="mt-12 space-y-px">
          {phases.map(([n, h, p], i) => (
            <Reveal key={h} delay={i * 60}>
              <div className="panel grid gap-2 p-6 sm:grid-cols-[110px_280px_1fr] sm:items-center sm:gap-6">
                <span className="text-gold/80 font-display text-xs tracking-[0.2em] uppercase">
                  {n}
                </span>
                <h3 className="font-display text-sm tracking-[0.12em] uppercase">{h}</h3>
                <p className="text-muted-foreground text-sm">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 text-xs">
          Roadmap phases describe sequence and intent. No delivery dates are implied.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead eyebrow="Business Model" title="Layered, recurring, expandable." />
            <ul className="mt-8 space-y-px">
              {[
                "SaaS subscriptions",
                "AI executive subscriptions",
                "Enterprise licensing",
                "Transaction / marketplace revenue",
                "API / platform usage",
                "Vertical ecosystem commissions",
                "Strategic partnerships",
                "Enterprise implementation",
              ].map((r) => (
                <li key={r} className="panel px-5 py-3.5 text-sm">
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <FlowChain
                dense
                steps={["Land", "Fit", "Recurring", "Vertical Expansion", "Ecosystem Scale"]}
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <SectionHead eyebrow="Investor Materials" title="Available on qualified request." />
            <div className="mt-8 space-y-3">
              {[
                ["Company Profile", "Available on request"],
                ["Technology Overview", "Available on request"],
                ["Product Brief — UMRAIO®", "Available on request"],
                ["Financial Model", "Not published"],
                ["Traction Metrics", "Not published until verified"],
                ["Data Room", "Access by qualification"],
              ].map(([k, v]) => (
                <div key={k} className="panel flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm">{k}</span>
                  <span className="text-muted-foreground text-[10px] tracking-[0.16em] uppercase">
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <div className="panel mt-8 p-7">
              <StatusTag tone="gold">Partnership Pathways</StatusTag>
              <ul className="text-muted-foreground mt-5 space-y-2 text-sm">
                <li>Strategic investors and venture partners</li>
                <li>Enterprise and ecosystem partners</li>
                <li>Technology and infrastructure collaborators</li>
                <li>Government and institutional engagement</li>
              </ul>
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-7 inline-flex rounded-sm px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                Request Investor Access
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
