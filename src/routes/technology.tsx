import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, FlowChain } from "@/components/site/primitives";
import { CoreVisual } from "@/components/site/CoreVisual";
import renaiCore from "@/assets/renai-core-mark.png.asset.json";

const title = "Technology — RÉNAI.CORE™ Autonomous Intelligence Architecture";
const description =
  "RÉNAI.CORE™ is Digital Renaissance Metaverse's modular intelligence architecture: context, knowledge, memory, reasoning, orchestration, execution, evaluation and governance.";

export const Route = createFileRoute("/technology")({
  component: Technology,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technology" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
});

const capabilities = [
  ["Contextual Understanding", "Interpret business situations across channels, records and history."],
  ["Domain Knowledge", "Vertical knowledge graphs encode how an industry actually works."],
  ["Memory", "Working, episodic and semantic memory of customers and operations."],
  ["Reasoning & Decision Support", "Weigh options against objectives, constraints and policy."],
  ["Workflow Orchestration", "Decompose intent into tasks, route to tools and agents."],
  ["Autonomous Execution", "Bounded execution with explicit permissions and rollbacks."],
  ["Evaluation", "Benchmarks and outcome scoring on every consequential action."],
  ["Controlled Learning", "Improvement gated by review — never silent drift."],
];

function Technology() {
  return (
    <>
      <Section className="pt-36">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHead
              eyebrow="RÉNAI.CORE™"
              title="The Autonomous Intelligence Core."
              intro="An evolving intelligence layer designed to power vertical autonomous AI systems. RÉNAI.CORE™ is an Autonomous Intelligence Architecture — it is not a claim of artificial general intelligence."
              as="h1"
          />
            <p className="text-muted-foreground mt-6 max-w-2xl text-sm leading-relaxed">
              Digital Renaissance combines autonomous intelligence with governed implementation.
              Where relevant, the Islamic Implementation Layer™ connects Islamic principles, halal
              baselines, ethical requirements and responsible governance with technology and
              operational execution.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="https://renai-core.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                Explore RÉNAI.CORE™ →
              </a>
              <a
                href="https://renai-core.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-primary/60 hover:text-primary inline-flex items-center rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                View the Intelligence Core
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <CoreVisual className="mx-auto max-w-sm" />
          </Reveal>
        </div>
      </Section>

      <Section className="border-border border-y">
        <Reveal>
          <SectionHead eyebrow="Capabilities" title="Eight capabilities, one governed core." />
        </Reveal>
        <div className="mt-12 grid gap-px sm:grid-cols-2">
          {capabilities.map(([h, p], i) => (
            <Reveal key={h} delay={i * 60}>
              <div className="panel h-full p-6">
                <h3 className="font-display text-primary text-sm tracking-[0.14em] uppercase">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Intelligence Loop" title="Context in. Governed action out." />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10">
            <FlowChain
              steps={[
                "Data",
                "Domain Knowledge",
                "Context",
                "Reasoning",
                "Decision",
                "Action",
                "Observation",
                "Evaluation",
                "Experience",
                "Controlled Learning",
                "Improvement",
              ]}
            />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <img
            src={renaiCore.url}
            alt="RÉNAI.CORE — The Autonomous Intelligence Core"
            className="mt-14 w-full rounded-sm"
            loading="lazy"
          />
        </Reveal>
      </Section>

      <Section className="border-border border-t">
        <Reveal>
          <SectionHead
            eyebrow="AI Governance"
            title="Autonomy is only valuable when it is accountable."
            intro="Governance is a first-class layer of the architecture, applied across every stage of the intelligence loop."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Human Oversight", "Consequential actions remain reviewable and reversible."],
            ["Auditability", "Decisions, inputs and executions are traceable."],
            ["Security & Privacy", "Data boundaries enforced per tenant and per vertical."],
            ["Responsible Autonomy", "Explicit permission scopes define what a system may do."],
          ].map(([h, p]) => (
            <div key={h} className="panel border-gold/25 p-6">
              <h3 className="text-gold font-display text-sm tracking-[0.14em] uppercase">{h}</h3>
              <p className="text-muted-foreground mt-3 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-xs">
          Formal certifications and compliance attestations will be published only once obtained and
          verifiable.
        </p>
        <div className="mt-10">
          <a
            href="https://renai-core.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
          >
            Discover RÉNAI.CORE™ →
          </a>
        </div>

      </Section>
    </>
  );
}
