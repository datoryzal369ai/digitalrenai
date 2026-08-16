import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, MessagesSquare, Workflow, BarChart3 } from "lucide-react";
import { Reveal, Section, SectionHead, StatusTag, FlowChain } from "@/components/site/primitives";
import { CoreVisual } from "@/components/site/CoreVisual";
import drmLogo from "@/assets/drm-mark.png.asset.json";
import renaiCore from "@/assets/renaio-core-mark.png.asset.json";
import umraverse from "@/assets/umraverse-mark.png.asset.json";
import umraio from "@/assets/umraio.png.asset.json";
import umraioWordmark from "@/assets/umraio-wordmark.png.asset.json";

import dashboard from "@/assets/renai-dashboard.png.asset.json";

const UMRAIO_URL = "https://www.umraio.com";
const RENAI_CORE_URL = "https://renai-core.lovable.app";


const umraioProductCapabilities = [
  ["AI Conversation", "Understand and respond to customer enquiries."],
  ["Lead Intelligence", "Identify customer intent and sales opportunities."],
  ["Autonomous Follow-up", "Support consistent follow-up workflows."],
  ["Business Execution", "Assist with operational tasks and workflows."],
  ["Business Intelligence", "Surface insights and recommendations."],
  ["Customer Experience", "Support faster and more consistent customer engagement."],
];

const title =
  "Digital Renaissance Metaverse™ | Autonomous Intelligence & Shariah-First Digital Ecosystems";
const description =
  "Digital Renaissance Metaverse™ builds autonomous intelligence systems and governed digital ecosystems across AI, commerce, community and services — with an Islamic Implementation Layer™ for relevant halal and Shariah-aware ecosystems.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "/#organization",
              name: "Digital Renaissance Metaverse",
              alternateName: "DRM",
              description,
              foundingLocation: { "@type": "Country", name: "Malaysia" },
              areaServed: ["Malaysia", "ASEAN", "GCC", "MENA"],
              knowsAbout: [
                "Autonomous intelligence architecture",
                "Vertical AI platforms",
                "AI agents and orchestration",
                "AI governance",
              ],
              founder: {
                "@type": "Person",
                "@id": "/#founder",
                name: "Dato' Ryzal Jamaludin",
                jobTitle: "Founder & Executive Director",
              },
            },
            {
              "@type": "Product",
              name: "RÉNAIO.CORE™",
              description:
                "The Autonomous Intelligence Core: a modular intelligence architecture for contextual reasoning, memory, orchestration, evaluation and governed autonomous execution. Under development.",
              brand: { "@id": "/#organization" },
            },
            {
              "@type": "Product",
              name: "UMRAIO®",
              url: "https://www.umraio.com",
              description:
                "Autonomous AI Business Executive for modern Umrah agencies, operating within the UMRAVERSE® ecosystem and powered by RÉNAIO.CORE™. Flagship product in active development.",
              brand: { "@id": "/#organization" },
              sameAs: ["https://www.umraio.com"],
            },

            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Digital Renaissance Metaverse?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Digital Renaissance Metaverse is a Malaysian-born AI technology company building autonomous intelligence systems, vertical AI platforms and digital ecosystems for businesses and society.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is RÉNAIO.CORE™?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "RÉNAIO.CORE™ is the company's autonomous intelligence architecture — a modular intelligence layer for context, reasoning, memory, orchestration, evaluation and governed execution. It is not a claim of AGI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is UMRAIO®?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "UMRAIO® is Digital Renaissance Metaverse's flagship vertical autonomous AI business executive, built for modern Umrah agencies within the UMRAVERSE® ecosystem and powered by the RÉNAIO.CORE™ intelligence architecture. The dedicated product experience is at https://www.umraio.com.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
});

const snapshot = [
  { k: "Malaysia", v: "Technology Origin" },
  { k: "AI", v: "Core Technology" },
  { k: "Vertical AI", v: "Domain Intelligence" },
  { k: "Autonomous Systems", v: "Product Architecture" },
  { k: "Global", v: "Expansion Vision" },
];

const stackLayers = [
  ["01", "Data & Context", "Structured and unstructured business signal, normalised for reasoning."],
  ["02", "Knowledge Graph", "Domain knowledge, entities and relationships per vertical."],
  ["03", "Memory & Experience", "Working, episodic and semantic memory across operations."],
  ["04", "Reasoning & Decision", "Multi-perspective reasoning under explicit objectives."],
  ["05", "Agent & Tool Orchestration", "Task decomposition, routing and tool execution."],
  ["06", "Autonomous Execution", "Bounded execution of workflows with permission controls."],
  ["07", "Evaluation & Learning", "Benchmarking, outcome scoring and controlled improvement."],
  ["08", "Governance & Observability", "Security, audit trails, human oversight, policy controls, responsible AI and domain-specific governance."],
];

const umraioCapabilities = [
  {
    icon: TrendingUp,
    title: "AI Sales",
    desc: "Lead intelligence, response and follow-up.",
  },
  {
    icon: MessagesSquare,
    title: "AI Customer Experience",
    desc: "Context-aware customer conversations and support.",
  },
  {
    icon: Workflow,
    title: "AI Operations",
    desc: "Workflow automation and business execution.",
  },
  {
    icon: BarChart3,
    title: "AI Business Intelligence",
    desc: "Analytics, recommendations and decision support.",
  },
];

const futureVerticals = [
  {
    name: "WORVERSE®",
    domain: "Workforce & Employment Digital Ecosystem",
    exec: "WORIO®",
    execDesc: "Autonomous AI Business Executive for Workforce Agencies",
    status: "Strategic Development",
    tone: "violet" as const,
  },
  {
    name: "MEDIVERSE®",
    domain: "Medical Tourism & Healthcare Digital Ecosystem",
    exec: "MEDIO®",
    execDesc: "Autonomous AI Business Executive for Medical Tourism",
    status: "Strategic Development",
    tone: "amber" as const,
  },
];


const problems = [
  "Slow response to inbound enquiries",
  "Missed and unqualified leads",
  "Inconsistent follow-up",
  "Fragmented customer information",
  "Manual quotation processes",
  "Repetitive WhatsApp workload",
  "Limited sales visibility",
  "Marketing inefficiency",
  "Heavy staff dependency",
  "Operational fragmentation",
];

const differentiation = [
  ["Generic CRM", "—", "—", "—", "—"],
  ["AI Chatbot", "Partial", "—", "—", "—"],
  ["AI Assistant", "Partial", "Partial", "—", "—"],
  ["AI Agent", "Partial", "Partial", "Partial", "—"],
  ["Vertical AI", "Yes", "Partial", "Partial", "Partial"],
  ["Digital Renaissance Architecture", "Yes", "Yes", "Yes", "Yes"],
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="from-background absolute inset-0 bg-gradient-to-b via-transparent to-[var(--background)]" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-rise">
            <img
              src={drmLogo.url}
              alt="Digital Renaissance Metaverse corporate logo"
              className="h-32 w-auto sm:h-40 lg:h-44"
              fetchPriority="high"
            />
            <p className="eyebrow mt-8">Autonomous Intelligence Company</p>
            <h1 className="mt-5 text-[2.15rem] leading-[1.03] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Building the autonomous intelligence economy.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              Digital Renaissance Metaverse™ builds autonomous intelligence systems and digital
              ecosystems designed to understand context, reason, execute and evolve — with
              governance, responsible AI and Islamic implementation at the foundation of relevant
              ecosystems.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={RENAI_CORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                Explore RÉNAIO.CORE™ →
              </a>
              <a
                href={UMRAIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary/50 text-primary hover:bg-primary/10 inline-flex items-center rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                Explore UMRAIO® →
              </a>
              <Link
                to="/investors"
                className="text-muted-foreground hover:text-foreground inline-flex items-center text-[11px] tracking-[0.18em] uppercase underline underline-offset-8 transition-colors"
              >
                Investor & Partnerships
              </Link>
            </div>

          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <CoreVisual />
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <div className="border-border border-y">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-5">
          {snapshot.map((s, i) => (
            <Reveal key={s.k} delay={i * 70}>
              <div className="border-border/60 px-2 py-7 md:border-l md:first:border-l-0 md:px-6">
                <p className="font-display text-base tracking-[0.1em] uppercase">{s.k}</p>
                <p className="text-muted-foreground mt-2 text-[11px] tracking-[0.16em] uppercase">
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* WHO WE ARE */}
      <Section id="who-we-are">
        <Reveal>
          <SectionHead
            eyebrow="Who We Are"
            title="We are building what comes after software."
            intro="Traditional software waits for humans to operate it. Digital Renaissance is building systems where intelligence understands context, reasons over business information, recommends action, executes workflows and learns from outcomes — inside controlled governance."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 grid gap-px md:grid-cols-3">
            {[
              ["Understand & reason", "Context, domain knowledge and business memory inform every decision path."],
              ["Recommend & execute", "Bounded autonomy across real operational workflows, not isolated chat."],
              ["Evaluate & improve", "Outcomes are scored, and improvement is deliberate and controlled."],
            ].map(([h, p]) => (
              <div key={h} className="panel p-7">
                <h3 className="text-lg font-medium">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <p className="text-muted-foreground leading-relaxed">
              But intelligence alone is not enough. The next generation of digital ecosystems must
              also consider principles, ethics, trust, governance and the values of the communities
              they serve.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For relevant Islamic and halal ecosystems, Digital Renaissance introduces an{" "}
              <span className="text-foreground">Islamic Implementation Layer™</span> — designed to
              translate Islamic principles, halal baselines and ethical requirements into governed
              technology, commerce, community and operational workflows.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="panel mt-10 p-7 sm:p-9">
            <p className="eyebrow">A New Category</p>
            <h3 className="font-display mt-4 text-xl tracking-[0.06em] uppercase sm:text-2xl">
              Shariah-First Digital Ecosystems™
            </h3>
            <p className="text-muted-foreground mt-4 max-w-3xl leading-relaxed">
              Not simply digital products with Islamic labels — but ecosystems designed to
              incorporate relevant Islamic principles, halal considerations, ethical governance and
              responsible implementation at the system level.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10">
            <p className="eyebrow mb-4">The Trajectory</p>
            <FlowChain
              steps={[
                "Software",
                "AI Assistants",
                "AI Agents",
                "Autonomous AI Executives",
                "Autonomous Intelligence Ecosystems",
              ]}
            />
          </div>
        </Reveal>
      </Section>

      {/* VISION */}
      <Section id="vision" className="border-border border-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHead eyebrow="Our Vision" title="Reimagine. Rebuild. Redefine." />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              To build a new generation of intelligent digital ecosystems where autonomous
              intelligence augments human capability, accelerates businesses and creates meaningful
              economic and social impact.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              <span className="text-foreground">Mission — </span>
              To develop proprietary AI systems, vertical intelligence platforms and autonomous
              digital executives that solve real-world problems across high-value industries.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="space-y-px">
              {[
                ["Reimagine", "Challenge conventional systems."],
                ["Rebuild", "Engineer intelligent infrastructure."],
                ["Redefine", "Create new economic and human possibilities."],
              ].map(([h, p], i) => (
                <div key={h} className="panel flex items-baseline gap-6 p-7">
                  <span className="text-gold/70 font-display text-sm">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-[0.06em] uppercase">{h}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* BRAND ARCHITECTURE */}
      <Section id="architecture">
        <Reveal>
          <SectionHead
            eyebrow="Brand & System Architecture"
            title="One intelligence core. Multiple ecosystems. Autonomous execution."
            align="center"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 space-y-3 text-center">
            {[
              { label: "Digital Renaissance Metaverse™", sub: "The Ecosystem Architect", tone: "gold" },
              { label: "RÉNAIO.CORE™", sub: "The Autonomous Intelligence Core", tone: "cyan" },
              {
                label: "Islamic Implementation Layer™",
                sub: "Principles • Halal • Ethics • Governance • Implementation",
                tone: "gold",
              },
              {
                label: "Digital Ecosystems",
                sub: "Social • Commerce • Services • Community",
                tone: "platinum",
              },
              {
                label: "UMRAVERSE® · WORVERSE® · MEDIVERSE®",
                sub: "Vertical Digital Ecosystems",
                tone: "platinum",
              },
              {
                label: "UMRAIO® · WORIO® · MEDIO®",
                sub: "Autonomous AI Business Executives",
                tone: "cyan",
              },
              { label: "Business & Customer Outcomes", sub: "Real economy impact", tone: "platinum" },
            ].map((row, i, arr) => (
              <div key={row.label}>
                <div
                  className={`panel mx-auto max-w-3xl px-6 py-6 ${
                    row.tone === "gold"
                      ? "border-gold/40"
                      : row.tone === "cyan"
                        ? "border-primary/40"
                        : ""
                  }`}
                >
                  <p
                    className={`font-display text-base tracking-[0.08em] uppercase sm:text-lg ${
                      row.tone === "gold" ? "text-gold" : row.tone === "cyan" ? "text-primary" : ""
                    }`}
                  >
                    {row.label}
                  </p>
                  <p className="text-muted-foreground mt-2 text-[11px] tracking-[0.2em] uppercase">
                    {row.sub}
                  </p>
                </div>
                {i < arr.length - 1 ? (
                  <div className="bg-primary/40 mx-auto my-3 h-6 w-px" />
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* RÉNAIO.CORE */}
      <Section id="renai-core" className="border-border border-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <img
              src={renaiCore.url}
              alt="RÉNAIO.CORE — The Autonomous Intelligence Core"
              className="w-full rounded-sm"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHead
              eyebrow="RÉNAIO.CORE™"
              title="The intelligence layer behind our ecosystems."
              intro="An evolving intelligence layer designed to power vertical autonomous AI systems — an Autonomous Intelligence Architecture, not a claim of AGI."
            />
            <ul className="text-muted-foreground mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {[
                "Contextual reasoning",
                "Domain knowledge",
                "Business intelligence",
                "Memory",
                "Workflow orchestration",
                "Decision support",
                "Tool execution",
                "Evaluation",
                "Controlled learning",
                "Experience capture",
                "Governance",
                "Observability",
              ].map((c) => (
                <li key={c} className="border-border/50 border-b py-1.5">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={RENAI_CORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                Explore RÉNAIO.CORE™ →
              </a>
              <a
                href={RENAI_CORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-primary/60 hover:text-primary inline-flex items-center rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                View the Intelligence Core
              </a>
            </div>

          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="panel mt-16 p-6 sm:p-10">
            <p className="eyebrow">Intelligence Loop</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
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
              ].map((s, i) => (
                <div
                  key={s}
                  className="border-border bg-surface-2/40 flex items-center gap-3 rounded-sm border px-4 py-3"
                >
                  <span className="text-primary/60 text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[12px] tracking-[0.12em] uppercase">{s}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8 text-[10px] tracking-[0.28em] uppercase">
              Principles &amp; Governance
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-4">
              {["Security", "Governance", "Human Oversight", "Auditability"].map((c) => (
                <div
                  key={c}
                  className="border-gold/30 bg-gold/5 text-gold rounded-sm border px-4 py-3 text-center text-[11px] tracking-[0.16em] uppercase"
                >
                  {c}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 max-w-3xl text-xs leading-relaxed">
              Horizontal control layers apply across every stage of the loop. Intelligence determines
              what can be done. Governance determines how it should be done, within defined
              principles, policies and oversight. Where relevant, the Islamic Implementation Layer™
              provides additional principles and governance context.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* TECHNOLOGY STACK */}
      <Section id="stack">
        <Reveal>
          <SectionHead
            eyebrow="Technology Stack"
            title="A modular intelligence architecture — not a single AI model."
            intro="RÉNAIO.CORE™ is designed in layers so that reasoning, memory, execution and governance can evolve independently and be reused across every vertical ecosystem."
          />
        </Reveal>
        <div className="mt-14 space-y-px">
          {stackLayers.map(([n, h, p], i) => (
            <Reveal key={h} delay={i * 50}>
              <div className="panel grid gap-3 p-6 sm:grid-cols-[64px_240px_1fr] sm:items-center sm:gap-6">
                <span className="text-primary/70 font-display text-sm">{n}</span>
                <h3 className="font-display text-sm tracking-[0.14em] uppercase">{h}</h3>
                <p className="text-muted-foreground text-sm">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 text-xs">
          Domain governance can be extended for specific ecosystems, including Shariah-aware and
          halal operating requirements.
        </p>
      </Section>

      {/* ISLAMIC IMPLEMENTATION LAYER */}
      <Section id="islamic-implementation-layer" className="border-border border-y">
        <Reveal>
          <SectionHead
            eyebrow="Islamic Implementation Layer™"
            title="From principles to implementation."
            intro="An architectural layer designed to translate relevant Islamic principles, Shariah considerations, halal baselines and Islamic business ethics into governance rules, decision support, product and service policies, AI behaviour and operational workflows."
          />
        </Reveal>
        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Shariah Principles", "Relevant Islamic principles and governance considerations informing applicable decisions."],
            ["02", "Halal Baseline", "A structured baseline for evaluating relevant products, services, transactions and business activities."],
            ["03", "Islamic Implementation", "Translating principles and ethical requirements into practical technology, commerce, community and operational workflows."],
            ["04", "Responsible AI Governance", "Human oversight, explainability, traceability, auditability, policy controls and responsible execution."],
          ].map(([n, h, p], i) => (
            <Reveal key={h} delay={i * 70}>
              <div className="panel border-gold/25 h-full p-7">
                <span className="text-gold/70 font-display text-xs">{n}</span>
                <h3 className="text-gold font-display mt-4 text-sm tracking-[0.14em] uppercase">
                  {h}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="panel px-6 py-5">
              <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase">
                RÉNAIO.CORE™
              </p>
              <p className="mt-2 text-sm">Autonomous intelligence — context, reasoning, execution.</p>
            </div>
            <div className="panel border-gold/25 px-6 py-5">
              <p className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase">
                Islamic Implementation Layer™
              </p>
              <p className="mt-2 text-sm">
                Principles, halal baseline, ethics, governance and implementation.
              </p>
            </div>
          </div>
        </Reveal>
        <p className="text-muted-foreground mt-8 max-w-3xl text-xs leading-relaxed">
          This layer is designed to support Shariah-aware implementation and remains subject to
          appropriate Shariah governance and expert oversight. AI systems are not a religious
          authority, do not issue religious rulings and do not replace qualified scholars. No formal
          Shariah certification is claimed.
        </p>
      </Section>

      {/* DIGITAL ECOSYSTEM LAYERS */}
      <Section id="ecosystems">
        <Reveal>
          <SectionHead
            eyebrow="Digital Ecosystem Layers"
            title="One intelligence architecture. Multiple real-world ecosystems."
            intro="Above the intelligence core and governance layers, Digital Renaissance ecosystems can extend into community, commerce and services — each governed by domain-specific principles and policies."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="panel h-full p-7">
              <StatusTag tone="muted">Strategic Layer</StatusTag>
              <h3 className="mt-6 text-xl font-medium">Social, built around trust.</h3>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Future Digital Renaissance ecosystems can incorporate community and social
                experiences governed by responsible content policies, ethical interaction, privacy,
                trust and domain-specific principles.
              </p>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Where relevant, Islamic content governance can incorporate principles such as
                honesty, dignity, responsible communication, avoidance of deception and appropriate
                community standards.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="panel h-full p-7">
              <StatusTag tone="muted">Strategic Layer</StatusTag>
              <h3 className="mt-6 text-xl font-medium">Commerce, with a governed foundation.</h3>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                Digital Renaissance ecosystems can incorporate marketplace infrastructure designed
                around transparent commerce, responsible seller participation, product and service
                governance, appropriate halal baselines and auditable operational policies.
              </p>
              <div className="mt-6">
                <FlowChain
                  dense
                  steps={[
                    "Seller",
                    "Product / Service",
                    "Halal Baseline",
                    "Governance",
                    "Transaction",
                    "Customer",
                    "Audit / Feedback",
                  ]}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="panel h-full p-7">
              <StatusTag tone="muted">Strategic Layer</StatusTag>
              <h3 className="mt-6 text-xl font-medium">Services, across real economies.</h3>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                The same architecture is configurable by domain across service ecosystems.
              </p>
              <ul className="text-muted-foreground mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {[
                  "Travel",
                  "Umrah",
                  "Workforce",
                  "Medical Tourism",
                  "Education",
                  "Professional Services",
                  "Community Services",
                ].map((s) => (
                  <li key={s} className="border-border/50 border-b py-1.5">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <p className="text-muted-foreground mt-8 text-xs">
          Ecosystem layers describe architectural direction. Products are published only when
          available.
        </p>
      </Section>

      {/* PORTFOLIO */}
      <Section id="platforms" className="border-border border-y">
        <Reveal>
          <SectionHead
            eyebrow="AI Platform Portfolio"
            title="From one intelligence core to multiple industries."
            intro="RÉNAIO.CORE™ provides the intelligence architecture. Our vertical ecosystems provide the domain context. Autonomous AI executives turn that intelligence into business action."
          />
        </Reveal>

        {/* FLAGSHIP — UMRAIO */}
        <Reveal delay={80}>
          <article className="panel mt-16 overflow-hidden">
            <div className="grid gap-12 p-7 sm:p-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 lg:p-14">
              <div className="min-w-0">
                <StatusTag tone="cyan">Flagship / Active Development</StatusTag>
                <p className="text-muted-foreground mt-6 text-[10px] tracking-[0.28em] uppercase">
                  Our flagship AI executive
                </p>
                <h3 className="font-display mt-3 text-4xl tracking-[0.02em] sm:text-5xl">UMRAIO®</h3>
                <p className="text-muted-foreground mt-3 text-[11px] tracking-[0.22em] uppercase">
                  Autonomous AI Business Executive for Modern Umrah Agencies
                </p>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  UMRAIO brings autonomous intelligence into the daily operations of modern Umrah
                  agencies — helping teams respond, reason, follow up, execute and make better
                  business decisions.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={UMRAIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary/50 text-primary hover:bg-primary/10 inline-flex rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
                  >
                    Explore UMRAIO® →
                  </a>
                  <a
                    href={UMRAIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border text-muted-foreground hover:text-foreground inline-flex rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
                  >
                    View Product
                  </a>
                </div>
              </div>


              {/* UMRAIO product identity visual */}
              <div className="relative">
                <div className="border-border/70 from-surface/70 to-background/80 relative overflow-hidden rounded-lg border bg-gradient-to-br p-8 sm:p-12">
                  <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
                  <div
                    className="core-glow animate-corepulse pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />
                  <div
                    aria-hidden="true"
                    className="border-primary/15 animate-orbit pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  >
                    <span className="bg-primary/70 absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full" />
                  </div>
                  <div
                    aria-hidden="true"
                    className="border-primary/10 pointer-events-none absolute top-1/2 left-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  />
                  <img
                    src={umraioWordmark.url}
                    alt="UMRAIO® brand mark"
                    className="relative mx-auto w-full max-w-[420px]"
                    loading="lazy"
                  />

                </div>

                <div className="mt-8 flex items-center gap-5">
                  <span className="text-muted-foreground shrink-0 text-[10px] tracking-[0.28em] uppercase">
                    Powered by
                  </span>
                  <span className="hairline" />
                </div>
                <p className="text-gold font-display mt-3 text-sm tracking-[0.2em] uppercase">
                  RÉNAIO.CORE™
                </p>

                <div className="mt-7 flex items-center gap-5">
                  <span className="text-muted-foreground shrink-0 text-[10px] tracking-[0.28em] uppercase">
                    Part of
                  </span>
                  <span className="hairline" />
                </div>
                <div className="mt-4 flex min-w-0 flex-wrap items-center gap-x-6 gap-y-2">
                  <img
                    src={umraverse.url}
                    alt="UMRAVERSE® ecosystem brand mark"
                    className="w-full max-w-[120px] opacity-70"
                    loading="lazy"
                  />
                  <p className="text-muted-foreground min-w-0 text-[10px] tracking-[0.2em] uppercase">
                    Islamic Travel &amp; Umrah Digital Ecosystem
                  </p>
                </div>

              </div>
            </div>

            {/* CAPABILITIES */}
            <div className="border-border/70 grid border-t sm:grid-cols-2 lg:grid-cols-4">
              {umraioCapabilities.map(({ icon: Icon, title: t, desc }) => (
                <div
                  key={t}
                  className="border-border/70 border-b p-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
                >
                  <Icon className="text-primary h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
                  <h4 className="mt-5 text-[11px] tracking-[0.18em] uppercase">{t}</h4>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        {/* FUTURE VERTICALS */}
        <p className="text-muted-foreground mt-16 text-[10px] tracking-[0.28em] uppercase">
          Future verticals
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {futureVerticals.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="panel flex h-full flex-col p-8">
                <StatusTag tone={p.tone}>{p.status}</StatusTag>
                <p className="text-muted-foreground mt-6 text-[10px] tracking-[0.24em] uppercase">
                  Ecosystem
                </p>
                <h3 className="font-display mt-2 text-xl tracking-[0.04em]">{p.name}</h3>
                <p className="text-muted-foreground mt-1.5 text-sm">{p.domain}</p>
                <div className="hairline my-6" />
                <p className="text-muted-foreground text-[10px] tracking-[0.24em] uppercase">
                  Autonomous AI Business Executive
                </p>
                <p className="font-display text-primary mt-2 text-2xl">{p.exec}</p>
                <p className="text-muted-foreground mt-2 text-sm">{p.execDesc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="text-muted-foreground mt-6 max-w-3xl text-xs leading-relaxed">
          Each vertical follows the same pattern: RÉNAIO.CORE™ → Islamic Implementation Layer™ where
          relevant → vertical domain intelligence → autonomous executive → real-world ecosystem. The
          architecture is configurable by domain; not every future ecosystem is Islamic.
        </p>


      </Section>

      {/* UMRAIO FLAGSHIP */}
      <Section id="umraio">
        <Reveal>
          <p className="eyebrow">Our first vertical autonomous AI business executive</p>
          <h2 className="mt-4 max-w-4xl text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl md:text-5xl">
            UMRAIO® — the autonomous AI business executive for modern Umrah agencies.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="border-border/70 from-surface/60 to-background/80 relative overflow-hidden rounded-lg border bg-gradient-to-br p-6 sm:p-8">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
              <img
                src={umraio.url}
                alt="RAIO — the autonomous AI business executive identity of UMRAIO®"
                className="relative mx-auto w-full max-w-[300px]"
                loading="lazy"
              />
              <div className="relative mt-6 text-center">
                <p className="font-display text-primary text-2xl tracking-[0.14em]">RAIO</p>
                <p className="text-muted-foreground mt-1.5 text-[10px] tracking-[0.24em] uppercase">
                  UMRAIO® · Autonomous AI Business Executive
                </p>
              </div>
            </div>
            <div className="hairline mt-8" />
            <p className="text-muted-foreground mt-8 text-[10px] tracking-[0.24em] uppercase">
              Powered by
            </p>
            <p className="text-gold font-display mt-2 text-sm tracking-[0.2em] uppercase">
              RÉNAIO.CORE™
            </p>
            <p className="text-muted-foreground mt-6 text-[10px] tracking-[0.24em] uppercase">
              Part of
            </p>
            <img
              src={umraverse.url}
              alt="UMRAVERSE ecosystem brand mark"
              className="mt-3 w-full max-w-[150px] opacity-70"
              loading="lazy"
            />
            <p className="text-muted-foreground mt-3 text-[10px] tracking-[0.2em] uppercase">
              Islamic Travel &amp; Umrah Digital Ecosystem
            </p>
          </Reveal>


          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2">
              {["Not a chatbot", "Not just a CRM", "Not just automation"].map((t) => (
                <StatusTag key={t} tone="muted">
                  {t}
                </StatusTag>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed">
              An AI business operating layer designed to help an Umrah agency think, respond, execute
              and grow.
            </p>
            <ul className="text-muted-foreground mt-7 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {[
                "Capture and qualify leads",
                "Respond faster, consistently",
                "Understand customer intent",
                "Automate WhatsApp conversations",
                "Follow up prospects",
                "Generate quotations",
                "Support sales and marketing",
                "Analyse business performance",
                "Recommend next actions",
                "Reduce repetitive operational work",
              ].map((f) => (
                <li key={f} className="border-border/50 border-b py-1.5">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="panel mt-14 p-6 sm:p-10">
            <p className="eyebrow">UMRAIO Architecture</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-[220px_1fr]">
              <div className="border-primary/40 bg-primary/5 flex items-center justify-center rounded-sm border p-6">
                <span className="font-display text-primary tracking-[0.1em] uppercase">
                  UMRAVERSE®
                </span>
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {[
                  "Umrah Knowledge",
                  "Customer Context",
                  "Agency Context",
                  "Travel Context",
                  "Operational Context",
                ].map((c) => (
                  <div
                    key={c}
                    className="border-border bg-surface-2/40 rounded-sm border px-4 py-3 text-[11px] tracking-[0.14em] uppercase"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/40 mx-auto my-5 h-6 w-px" />
            <div className="border-gold/40 bg-gold/5 text-gold font-display rounded-sm border px-6 py-5 text-center tracking-[0.16em] uppercase">
              RÉNAIO.CORE™
            </div>
            <div className="bg-primary/40 mx-auto my-5 h-6 w-px" />
            <div className="border-primary/40 bg-primary/10 text-primary font-display rounded-sm border px-6 py-5 text-center tracking-[0.16em] uppercase">
              UMRAIO®
            </div>
            <div className="bg-primary/40 mx-auto my-5 h-6 w-px" />
            <div className="grid gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {[
                "Sales",
                "Marketing",
                "Customer Experience",
                "Operations",
                "Analytics",
                "Follow-up",
                "Automation",
              ].map((c) => (
                <div
                  key={c}
                  className="border-border bg-surface-2/40 rounded-sm border px-3 py-3 text-center text-[10px] tracking-[0.14em] uppercase"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* TECHNOLOGY → PRODUCT → INDUSTRY */}
        <Reveal delay={80}>
          <div className="mt-14 grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <div className="border-gold/40 bg-gold/5 rounded-sm border px-6 py-5 text-center">
              <p className="text-gold font-display text-sm tracking-[0.18em] uppercase">
                RÉNAIO.CORE™
              </p>
              <p className="text-muted-foreground mt-1.5 text-[10px] tracking-[0.2em] uppercase">
                The Autonomous Intelligence Core
              </p>
            </div>
            <span className="text-primary/70 text-center text-xs">↓</span>
            <div className="border-primary/40 bg-primary/10 rounded-sm border px-6 py-5 text-center">
              <p className="text-primary font-display text-sm tracking-[0.18em] uppercase">
                UMRAIO®
              </p>
              <p className="text-muted-foreground mt-1.5 text-[10px] tracking-[0.2em] uppercase">
                Autonomous AI Business Executive
              </p>
            </div>
            <span className="text-primary/70 text-center text-xs">↓</span>
            <div className="border-border bg-surface-2/40 rounded-sm border px-6 py-5 text-center">
              <p className="font-display text-sm tracking-[0.18em] uppercase">Modern Umrah Agency</p>
              <p className="text-muted-foreground mt-1.5 text-[10px] tracking-[0.2em] uppercase">
                Real-world industry
              </p>
            </div>
          </div>
        </Reveal>

        {/* PRODUCT CAPABILITIES */}
        <Reveal delay={120}>
          <p className="text-muted-foreground mt-16 text-[10px] tracking-[0.28em] uppercase">
            On UMRAIO.com you will find
          </p>
          <div className="border-border mt-6 grid border-t border-l sm:grid-cols-2 lg:grid-cols-3">
            {umraioProductCapabilities.map(([t, d]) => (
              <div key={t} className="border-border border-r border-b p-7">
                <h4 className="text-[11px] tracking-[0.18em] uppercase">{t}</h4>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* SEE UMRAIO IN ACTION */}
        <Reveal delay={160}>
          <div className="panel mt-16 grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0">
              <h3 className="text-3xl leading-[1.1] font-semibold sm:text-4xl">
                See UMRAIO in action.
              </h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Explore the dedicated UMRAIO product experience.
              </p>
              <a
                href={UMRAIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-primary/50 text-primary hover:bg-primary/10 mt-8 inline-flex rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                Visit UMRAIO.com →
              </a>
              <p className="text-muted-foreground mt-5 text-sm">
                Discover the product, autonomous AI executive experience and capabilities.
              </p>
            </div>
            <div className="border-border/70 from-surface/60 to-background/80 relative overflow-hidden rounded-lg border bg-gradient-to-br p-8">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />
              <img
                src={umraioWordmark.url}
                alt="UMRAIO® brand mark"
                className="relative mx-auto w-full max-w-[320px]"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
      </Section>


      {/* PROBLEM / SOLUTION */}
      <Section id="problem-solution" className="border-border border-y">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The Problem</p>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Modern agencies lose value in the gaps between systems.
            </h3>
            <ul className="mt-7 space-y-2.5">
              {problems.map((p) => (
                <li
                  key={p}
                  className="text-muted-foreground border-border/60 flex items-start gap-3 border-b pb-2.5 text-sm"
                >
                  <span className="text-destructive/80 mt-0.5 text-xs">✕</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow">The Solution</p>
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
              An intelligent business layer that closes the loop.
            </h3>
            <div className="mt-7 space-y-3">
              {[
                ["Understand", "Interpret intent, context and history across every channel."],
                ["Reason", "Weigh options against agency objectives and constraints."],
                ["Recommend", "Surface the next best commercial action with rationale."],
                ["Execute", "Run the workflow — quotation, reply, task, follow-up."],
                ["Follow Up", "Persist through the sales cycle without human reminders."],
                ["Learn", "Score outcomes and improve inside governance boundaries."],
              ].map(([h, p], i) => (
                <div key={h} className="panel flex items-start gap-5 p-5">
                  <span className="text-primary/70 font-display text-xs">0{i + 1}</span>
                  <div>
                    <p className="font-display text-sm tracking-[0.14em] uppercase">{h}</p>
                    <p className="text-muted-foreground mt-1.5 text-sm">{p}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* AUTONOMOUS EXECUTIVE MODEL */}
      <Section id="model">
        <Reveal>
          <SectionHead
            eyebrow="Autonomous AI Executive Model"
            title="The difference is where the intelligence sits."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { t: "Traditional SaaS", steps: ["Human", "Software", "Action"], tone: "muted" },
            {
              t: "AI Assistant",
              steps: ["Human", "AI", "Recommendation", "Human Action"],
              tone: "muted",
            },
            {
              t: "Autonomous AI Executive",
              steps: [
                "Business Context",
                "RÉNAIO.CORE",
                "Reason",
                "Decide",
                "Execute",
                "Observe",
                "Evaluate",
                "Improve",
              ],
              tone: "cyan",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 110}>
              <div
                className={`panel h-full p-7 ${c.tone === "cyan" ? "border-primary/40" : ""}`}
              >
                <h3
                  className={`font-display text-sm tracking-[0.16em] uppercase ${c.tone === "cyan" ? "text-primary" : "text-muted-foreground"}`}
                >
                  {c.t}
                </h3>
                <ol className="mt-6 space-y-2">
                  {c.steps.map((s) => (
                    <li
                      key={s}
                      className="border-border bg-surface-2/40 rounded-sm border px-4 py-2.5 text-[11px] tracking-[0.14em] uppercase"
                    >
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SYSTEM PROOF */}
      <Section id="proof" className="border-border border-y">
        <Reveal>
          <SectionHead
            eyebrow="System Proof"
            title="See the intelligence in action."
            intro="Interface previews from our development environment. All screens are prototypes shown for demonstration purposes and do not represent customer data or commercial results."
          />
        </Reveal>
        <Reveal delay={120}>
          <figure className="panel mt-12 overflow-hidden">
            <img
              src={dashboard.url}
              alt="RÉNAIO.CORE Meta-Intelligence Command Center prototype interface"
              className="w-full"
              loading="lazy"
            />
            <figcaption className="text-muted-foreground border-border border-t px-5 py-4 text-[11px] tracking-[0.16em] uppercase">
              RÉNAIO.CORE™ Command Center — Prototype interface, in development
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "AI Executive Dashboard",
              "Lead Intelligence",
              "WhatsApp AI Executive",
              "Customer Intent Detection",
              "Follow-up Engine",
              "AI Marketing Executive",
              "Quotation Generator",
              "Business Analytics",
              "AI Recommendations",
              "Activity Log",
              "Knowledge Base",
              "Autonomous Workflow",
            ].map((m) => (
              <div
                key={m}
                className="border-border bg-surface/40 flex items-center justify-between gap-3 rounded-sm border px-4 py-3"
              >
                <span className="text-[11px] tracking-[0.12em] uppercase">{m}</span>
                <span className="text-muted-foreground text-[9px] tracking-[0.16em] uppercase">
                  Prototype
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* BUSINESS MODEL + MARKET */}
      <Section id="business">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHead eyebrow="Business Model" title="A layered revenue architecture." />
            <ul className="mt-8 space-y-px">
              {[
                "AI SaaS subscriptions",
                "AI executive subscriptions",
                "Platform subscriptions",
                "Enterprise licensing & solutions",
                "Marketplace commissions",
                "Transaction infrastructure",
                "API / platform usage",
                "Vertical ecosystem services",
                "Strategic partnerships",
                "Digital services & implementation",
              ].map((r, i) => (
                <li key={r} className="panel flex items-center gap-5 px-5 py-3.5 text-sm">
                  <span className="text-gold/70 text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-6 text-xs">
              Framework only. No financial projections are presented; figures will be published when
              verified.
            </p>
            <div className="mt-6">
              <FlowChain
                dense
                steps={[
                  "Land",
                  "Product-Market Fit",
                  "Recurring Revenue",
                  "Vertical Expansion",
                  "Cross-Ecosystem Scale",
                  "Regional Expansion",
                ]}
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <SectionHead eyebrow="Market Opportunity" title="Vertical depth before horizontal reach." />
            <div className="mt-8 space-y-3">
              {[
                ["Initial vertical", "Islamic Travel & Umrah"],
                ["Expansion", "Workforce & Employment"],
                ["Expansion", "Medical Tourism & Healthcare"],
                ["Long-term", "Additional vertical intelligence markets"],
              ].map(([k, v]) => (
                <div key={v} className="panel flex items-baseline justify-between gap-4 px-5 py-4">
                  <span className="text-muted-foreground text-[10px] tracking-[0.18em] uppercase">
                    {k}
                  </span>
                  <span className="text-sm">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="eyebrow mb-4">Geographic Strategy</p>
              <FlowChain steps={["Malaysia", "ASEAN", "GCC / MENA", "Global"]} />
            </div>
            <div className="panel mt-8 p-6">
              <p className="text-[11px] tracking-[0.2em] uppercase">Market Intelligence Module</p>
              <p className="text-muted-foreground mt-3 text-sm">
                Reserved for verified market research. TAM / SAM / SOM figures will be published only
                with cited, verifiable sources.
              </p>
              <StatusTag tone="muted">
                <span className="mt-2 inline-block">Subject to validation</span>
              </StatusTag>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* WHY NOW */}
      <Section id="why-now" className="border-border border-y">
        <Reveal>
          <SectionHead
            eyebrow="Why Now"
            title="The shift from software to autonomous intelligence."
            align="center"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex justify-center">
            <FlowChain
              steps={[
                "Cloud",
                "Mobile",
                "SaaS",
                "Generative AI",
                "AI Agents",
                "Autonomous AI Systems",
              ]}
            />
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["AI", "Frontier model capability is now production-viable."],
              ["Industry Knowledge", "Depth in a vertical is the durable advantage."],
              ["Digital Ecosystems", "Distribution and data compound together."],
              ["Autonomous Execution", "Value moves from advice to completed work."],
            ].map(([h, p]) => (
              <div key={h} className="panel p-6">
                <h3 className="font-display text-primary text-sm tracking-[0.14em] uppercase">{h}</h3>
                <p className="text-muted-foreground mt-3 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* DIFFERENTIATION */}
      <Section id="differentiation">
        <Reveal>
          <SectionHead
            eyebrow="Strategic Positioning"
            title="Vertical + contextual + autonomous + governed."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead>
                <tr className="text-muted-foreground text-[10px] tracking-[0.16em] uppercase">
                  <th className="border-border border-b px-4 py-4 text-left">Category</th>
                  {["Domain Context", "Business Memory", "Workflow Execution", "Governed Learning"].map(
                    (h) => (
                      <th key={h} className="border-border border-b px-4 py-4 text-left">
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {differentiation.map((row, i) => (
                  <tr
                    key={row[0]}
                    className={i === differentiation.length - 1 ? "text-primary" : ""}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="border-border/50 border-b px-4 py-3.5 whitespace-nowrap"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="panel border-gold/25 mt-10 p-7 sm:p-9">
            <p className="eyebrow">Category Ladder</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Most AI tools", "Assist"],
                ["Autonomous AI", "Execute"],
                ["Shariah-First Ecosystem Architecture", "Execute within principles and governance"],
              ].map(([k, v], i) => (
                <div key={k} className={`px-5 py-4 ${i === 2 ? "border-gold/30 bg-gold/5 rounded-sm border" : "border-border rounded-sm border"}`}>
                  <p className="text-muted-foreground text-[10px] tracking-[0.18em] uppercase">{k}</p>
                  <p className="mt-2 text-sm">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="text-muted-foreground mt-6 text-xs">
          Category-level comparison of architectural approaches, not an assessment of any named
          product or company.
        </p>
      </Section>


      {/* FINAL CTA */}
      <section className="relative flex min-h-[85svh] items-center overflow-hidden px-5 py-24 sm:px-8">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="core-glow absolute inset-0" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="text-3xl leading-[1.06] font-semibold text-balance sm:text-5xl">
              Building the next generation of Shariah-first digital ecosystems.
            </h2>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl leading-relaxed">
              Autonomous intelligence, governed by principles — Digital Renaissance Metaverse™ builds
              intelligent systems for a world where technology does more than assist: it understands,
              adapts and executes, responsibly.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm px-7 py-4 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors"
              >
                Start a Strategic Conversation
              </Link>
              <Link
                to="/investors"
                className="border-border hover:border-primary/60 rounded-sm border px-7 py-4 text-[11px] tracking-[0.18em] uppercase transition-colors"
              >
                Request Company Profile
              </Link>
            </div>
            <p className="text-gold mt-14 text-[11px] tracking-[0.35em] uppercase">
              Reimagine • Rebuild • Redefine
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
