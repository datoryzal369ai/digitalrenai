import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, FlowChain } from "@/components/site/primitives";
import { CoreVisual } from "@/components/site/CoreVisual";
import { CognitiveArchitecture } from "@/components/site/CognitiveArchitecture";
import renaiCore from "@/assets/renai-core-mark.png.asset.json";

const title = "Technology — RÉNAI.CORE™ Cognitive Intelligence Architecture";
const description =
  "RÉNAI.CORE™ is Digital Renaissance Metaverse's cognitive intelligence architecture — perception, context, memory, reasoning, planning, decision, action, evaluation and controlled learning, governed end to end.";

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

const cognitive = [
  ["01", "Perception", "Observe signals, events, users, environments and operational activity."],
  ["02", "Context", "Understand business, domain, user and environmental context."],
  ["03", "Memory", "Retrieve relevant knowledge, history, experience and operational memory."],
  ["04", "Reasoning", "Analyse information, relationships, constraints, objectives and possible outcomes."],
  ["05", "Planning", "Determine possible strategies, workflows and courses of action."],
  ["06", "Decision", "Select the appropriate next action based on objectives, context, permissions and constraints."],
  ["07", "Action", "Execute approved workflows, tools and operational tasks."],
  ["08", "Evaluation", "Measure outcomes, performance, quality and consequences."],
  ["09", "Controlled Learning", "Capture experience and improve system performance within defined governance boundaries."],
];

const governanceControls = [
  "Security",
  "Policy Controls",
  "Permissions",
  "Human Oversight",
  "Auditability",
  "Explainability",
  "Responsible AI",
  "Domain Governance",
  "Compliance",
  "Observability",
];

const hierarchy = [
  "Digital Renaissance Metaverse™",
  "RÉNAI.CORE™",
  "Cognitive Intelligence",
  "Autonomous AI Executives",
  "Vertical Digital Ecosystems",
  "Real-World Business Outcomes",
];

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

      <Section className="border-border border-t">
        <Reveal>
          <SectionHead
            eyebrow="Cognitive Architecture"
            title="Cognition inside. Governance around it."
            intro="RÉNAI.CORE™ is an Autonomous Intelligence Architecture designed for governed cognitive reasoning, decision support, workflow execution and controlled continuous improvement."
          />
        </Reveal>
        <Reveal delay={100}>
          <CognitiveArchitecture className="mt-14" />
        </Reveal>
      </Section>

      <Section className="border-border border-t">
        <Reveal>
          <SectionHead
            eyebrow="Cognitive Intelligence Layer"
            title="A closed cognitive loop, stage by stage."
            intro="Perceive → Understand → Remember → Reason → Plan → Decide → Act → Evaluate → Controlled Learning, then back into perception."
          />
        </Reveal>
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {cognitive.map(([n, h, p], i) => (
            <Reveal key={h} delay={i * 50}>
              <div className="panel h-full p-6">
                <span className="text-primary/60 font-display text-xs tracking-[0.2em]">{n}</span>
                <h3 className="font-display mt-3 text-sm tracking-[0.14em] uppercase">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-border border-t">
        <Reveal>
          <div className="panel border-platinum/20 p-8 md:p-12">
            <p className="eyebrow">Architectural Principle</p>
            <p className="font-display mt-6 text-xl leading-[1.35] text-balance sm:text-2xl md:text-3xl">
              Intelligence determines what can be understood, reasoned about and executed.
              <span className="text-gold">
                {" "}
                Governance determines how, when and under what boundaries it may be executed.
              </span>
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="border-border border-t">
        <Reveal>
          <SectionHead
            eyebrow="Cognitive Differentiation"
            title="From AI assistance to cognitive execution."
            intro="Most AI tools stop at conversation. RÉNAI.CORE™ is designed to carry a request through the full cognitive chain — and to keep every step inside governance boundaries."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10">
            <FlowChain
              steps={[
                "Context",
                "Knowledge",
                "Memory",
                "Reasoning",
                "Planning",
                "Decision",
                "Execution",
                "Evaluation",
                "Controlled Learning",
              ]}
            />
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="panel h-full p-6">
              <h3 className="text-muted-foreground font-display text-sm tracking-[0.14em] uppercase">
                AI Assistance
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Answers a prompt, then stops. No durable memory of the operation, no evaluation of
                the outcome, no accountable path from intent to executed work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="panel border-primary/30 h-full p-6">
              <h3 className="text-primary font-display text-sm tracking-[0.14em] uppercase">
                Cognitive Execution
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Understands context, retrieves memory, reasons over constraints, plans, decides,
                executes permitted workflows, measures the result and improves under review.
              </p>
            </div>
          </Reveal>
        </div>
        <p className="text-muted-foreground mt-8 text-xs">
          RÉNAI.CORE™ is not a claim of artificial general intelligence, and does not perform
          unrestricted self-modification. Learning is bounded, reviewed and reversible.
        </p>
      </Section>

      <Section className="border-border border-t">
        <Reveal>
          <SectionHead
            eyebrow="Architecture Hierarchy"
            title="From the core to real-world outcomes."
          />
        </Reveal>
        <div className="mt-12 space-y-px">
          {hierarchy.map((h, i) => (
            <Reveal key={h} delay={i * 60}>
              <div className="panel flex items-center gap-5 p-5 md:p-6">
                <span className="text-primary/50 font-display w-10 text-xs tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-display text-sm tracking-[0.14em] uppercase sm:text-base ${
                    i === 0 ? "text-platinum" : i === 1 ? "text-primary" : ""
                  }`}
                >
                  {h}
                </span>
              </div>
            </Reveal>
          ))}
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
        <div className="mt-8 flex flex-wrap gap-2">
          {governanceControls.map((g) => (
            <span
              key={g}
              className="border-gold/30 text-gold/90 bg-gold/5 rounded-full border px-3 py-1.5 text-[10px] tracking-[0.18em] uppercase"
            >
              {g}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 max-w-3xl text-sm leading-relaxed">
          Where an ecosystem is Islamic by nature, the Islamic Implementation Layer™ operates as a
          domain-specific governance and implementation layer within this control architecture. It
          is applied only to relevant ecosystems, not universally across non-Islamic verticals.
        </p>

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
