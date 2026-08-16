import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, Section, StatusTag } from "@/components/site/primitives";

type Tone = "gold" | "cyan" | "silver";

const toneMap: Record<Tone, { text: string; border: string; dot: string; line: string }> = {
  gold: {
    text: "text-gold",
    border: "border-gold/35",
    dot: "bg-gold",
    line: "from-gold/60",
  },
  cyan: {
    text: "text-primary",
    border: "border-primary/35",
    dot: "bg-primary",
    line: "from-primary/60",
  },
  silver: {
    text: "text-platinum",
    border: "border-platinum/25",
    dot: "bg-platinum",
    line: "from-platinum/50",
  },
};

function LevelLabel({ level, label, tone }: { level: string; label: string; tone: Tone }) {
  const t = toneMap[tone];
  return (
    <div className="flex items-center gap-4">
      <span className={`font-display text-sm ${t.text} tracking-[0.2em]`}>{level}</span>
      <span className="text-muted-foreground text-[10px] tracking-[0.28em] uppercase">{label}</span>
      <span className={`h-px flex-1 bg-gradient-to-r ${t.line} to-transparent`} />
    </div>
  );
}

function Panel({
  tone,
  children,
  className = "",
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  const t = toneMap[tone];
  return (
    <div
      className={`group relative border ${t.border} bg-background/60 rounded-sm transition-all duration-500 hover:-translate-y-0.5 ${className}`}
      style={{ boxShadow: "inset 0 1px 0 0 color-mix(in oklab, var(--platinum) 8%, transparent)" }}
    >
      {children}
    </div>
  );
}

function Areas({ items, tone }: { items: string[]; tone: Tone }) {
  const t = toneMap[tone];
  return (
    <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((a) => (
        <li key={a} className="flex items-center gap-3">
          <span className={`h-1 w-1 shrink-0 rounded-full ${t.dot} opacity-70`} />
          <span className="text-muted-foreground text-[11px] tracking-[0.14em] uppercase">{a}</span>
        </li>
      ))}
    </ul>
  );
}

function HoverArchitecture({ items, tone }: { items: string[]; tone: Tone }) {
  const t = toneMap[tone];
  return (
    <div className="mt-8 hidden items-center gap-3 md:flex">
      {items.map((i, idx) => (
        <div key={i} className="flex items-center gap-3">
          <span
            className={`text-[10px] tracking-[0.24em] uppercase ${t.text} opacity-40 transition-all duration-500 group-hover:opacity-100`}
            style={{ transitionDelay: `${idx * 70}ms` }}
          >
            {i}
          </span>
          {idx < items.length - 1 ? (
            <span
              className={`h-px w-6 bg-gradient-to-r ${t.line} to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-100`}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function FounderGlyph() {
  return (
    <div className="relative aspect-square w-full max-w-[300px]" aria-hidden="true">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <defs>
          <radialGradient id="ldrCore" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
            <stop offset="70%" stopColor="var(--gold)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="110" fill="url(#ldrCore)" className="animate-corepulse" />
        <g className="animate-orbit" style={{ transformOrigin: "150px 150px" }}>
          <circle
            cx="150"
            cy="150"
            r="118"
            fill="none"
            stroke="var(--platinum)"
            strokeWidth="0.6"
            opacity="0.35"
            strokeDasharray="2 10"
          />
        </g>
        <g
          className="animate-orbit"
          style={{
            transformOrigin: "150px 150px",
            animationDirection: "reverse",
            animationDuration: "30s",
          }}
        >
          <polygon
            points="150,52 235,101 235,199 150,248 65,199 65,101"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.9"
            opacity="0.5"
          />
        </g>
        <polygon
          points="150,96 197,123 197,177 150,204 103,177 103,123"
          fill="none"
          stroke="var(--platinum)"
          strokeWidth="1.2"
          opacity="0.8"
        />
        <text
          x="150"
          y="156"
          textAnchor="middle"
          className="font-display"
          fill="var(--platinum)"
          fontSize="26"
          letterSpacing="6"
        >
          DRM
        </text>
      </svg>
    </div>
  );
}

const architectureRows: { label: string; nodes: string[]; tone: Tone }[] = [
  {
    label: "Level 01 — Founder & Ecosystem Architect",
    nodes: ["Vision", "Architecture", "RÉNAIO.CORE™"],
    tone: "gold",
  },
  {
    label: "Level 02 — Executive Leadership",
    nodes: ["Execution", "Operations", "Growth"],
    tone: "cyan",
  },
  {
    label: "Level 03 — Strategic Advisory",
    nodes: ["Strategy", "Investor Readiness", "Positioning"],
    tone: "silver",
  },
];

export function Leadership() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <Section id="leadership" className="border-border border-y">
        <Reveal>
          <p className="eyebrow">Leadership &amp; Strategic Advisory</p>
          <h2 className="font-display mt-6 text-3xl leading-[1.05] font-semibold sm:text-5xl md:text-6xl">
            Founder-led.
            <br />
            <span className="text-muted-foreground">Architecture-first.</span>
            <br />
            Execution-driven.
          </h2>
          <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-relaxed sm:text-lg">
            A focused leadership and advisory structure combining digital ecosystem architecture,
            executive execution and strategic corporate intelligence.
          </p>
          <div className="border-border mt-8 max-w-xl border-l pl-5">
            <p className="text-sm leading-relaxed">
              Vision defines the architecture. Leadership drives execution. Strategic advisors
              strengthen the path forward.
            </p>
          </div>
        </Reveal>

        {/* LEVEL 01 — FOUNDER */}
        <Reveal delay={100}>
          <div className="mt-20">
            <LevelLabel level="01" label="Founder & Ecosystem Architect" tone="gold" />
            <Panel tone="gold" className="mt-6 p-7 sm:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
                <div className="min-w-0">
                  <StatusTag tone="gold">Founder</StatusTag>
                  <p className="font-display mt-6 text-3xl leading-tight sm:text-4xl">
                    Dato&apos; Ryzal Jamaludin
                  </p>
                  <p className="text-gold mt-3 text-[11px] leading-relaxed tracking-[0.2em] uppercase">
                    Founder, Executive Director &amp; Principal Digital Ecosystem Architect
                  </p>
                  <div className="hairline my-7" />
                  <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                    Leads the company&apos;s vision, digital ecosystem architecture, RÉNAIO.CORE™
                    intelligence direction, vertical platform strategy and long-term corporate
                    development.
                  </p>
                  <Areas
                    tone="gold"
                    items={[
                      "Digital Ecosystem Architecture",
                      "RÉNAIO.CORE™ Strategy",
                      "AI & Platform Vision",
                      "Industry Ecosystem Strategy",
                      "Corporate Development",
                      "Strategic Direction",
                    ]}
                  />
                  <HoverArchitecture
                    tone="gold"
                    items={["Vision", "Architecture", "RÉNAIO.CORE", "Ecosystem"]}
                  />
                </div>
                <div className="flex justify-center lg:justify-end">
                  <FounderGlyph />
                </div>
              </div>
            </Panel>

            <div className="border-gold/25 bg-background/40 mt-6 max-w-2xl border-l-2 py-5 pl-6">
              <p className="font-display text-lg leading-snug text-balance sm:text-xl">
                &ldquo;Build the architecture first. Then build the systems that can transform it
                into reality.&rdquo;
              </p>
              <p className="text-muted-foreground mt-3 text-[10px] tracking-[0.22em] uppercase">
                Founder philosophy — Dato&apos; Ryzal Jamaludin
              </p>
            </div>
          </div>
        </Reveal>

        {/* LEVEL 02 — EXECUTIVE */}
        <Reveal delay={120}>
          <div className="mt-20">
            <div className="text-primary/50 mb-6 ml-1 text-xs">↓</div>
            <LevelLabel level="02" label="Executive Leadership" tone="cyan" />
            <h3 className="font-display mt-8 text-2xl leading-tight sm:text-3xl">
              Turning architecture
              <br />
              into execution.
            </h3>
            <Panel tone="cyan" className="mt-6 p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="min-w-0">
                  <StatusTag tone="cyan">Executive</StatusTag>
                  <p className="font-display mt-6 text-2xl leading-tight sm:text-3xl">
                    Mahadhir Hata
                  </p>
                  <p className="text-primary mt-3 text-[11px] leading-relaxed tracking-[0.2em] uppercase">
                    Chief Executive Officer &amp; Executive Director
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leads executive operations, corporate execution, business development, strategic
                    partnerships and organizational growth across the Digital Renaissance ecosystem.
                  </p>
                  <Areas
                    tone="cyan"
                    items={[
                      "Executive Operations",
                      "Business Execution",
                      "Corporate Development",
                      "Strategic Partnerships",
                      "Commercial Growth",
                      "Organizational Leadership",
                    ]}
                  />
                  <HoverArchitecture
                    tone="cyan"
                    items={["Execution", "Operations", "Growth", "Partnerships"]}
                  />
                </div>
              </div>
            </Panel>
          </div>
        </Reveal>

        {/* LEVEL 03 — ADVISORY */}
        <Reveal delay={140}>
          <div className="mt-20">
            <div className="text-platinum/40 mb-6 ml-1 text-xs">↓</div>
            <LevelLabel level="03" label="Strategic Advisory" tone="silver" />
            <h3 className="font-display mt-8 text-2xl leading-tight sm:text-3xl">
              Experience that
              <br />
              strengthens the architecture.
            </h3>
            <Panel tone="silver" className="mt-6 p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="min-w-0">
                  <StatusTag tone="muted">Advisory — non-executive</StatusTag>
                  <p className="font-display mt-6 text-2xl leading-tight sm:text-3xl">
                    Prof. Dr. Hamdan Daniel
                  </p>
                  <p className="text-platinum mt-3 text-[11px] leading-relaxed tracking-[0.2em] uppercase">
                    Strategic Advisor — Corporate Strategy, Investor Readiness &amp; Executive
                    Advisory
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Provides strategic advisory across corporate positioning, executive
                    presentations, investor readiness, project strategy and high-level business
                    development.
                  </p>
                  <Areas
                    tone="silver"
                    items={[
                      "Corporate Strategy",
                      "Investor Readiness",
                      "Executive Pitch & Deck Strategy",
                      "Strategic Positioning",
                      "Project Advisory",
                      "Business Development",
                    ]}
                  />
                  <HoverArchitecture
                    tone="silver"
                    items={["Strategy", "Investor Readiness", "Positioning", "Advisory"]}
                  />
                  <p className="text-muted-foreground mt-7 text-[11px] leading-relaxed">
                    Advisory role. Not an executive or board appointment.
                  </p>
                </div>
              </div>
            </Panel>
          </div>
        </Reveal>

        {/* MOBILE EXPAND/COLLAPSE SUMMARY */}
        <Reveal delay={160}>
          <div className="mt-16 md:hidden">
            <p className="eyebrow">At a glance</p>
            <div className="mt-5 grid gap-3">
              {[
                {
                  n: "Dato' Ryzal Jamaludin",
                  r: "Vision + Architecture + Ecosystem",
                  tone: "gold" as Tone,
                },
                {
                  n: "Mahadhir Hata",
                  r: "Execution + Operations + Growth",
                  tone: "cyan" as Tone,
                },
                {
                  n: "Prof. Dr. Hamdan Daniel",
                  r: "Strategic Advisory + Investor Readiness + Corporate Strategy",
                  tone: "silver" as Tone,
                },
              ].map((p) => (
                <button
                  key={p.n}
                  type="button"
                  onClick={() => setOpen(open === p.n ? null : p.n)}
                  className={`border ${toneMap[p.tone].border} bg-background/60 rounded-sm px-5 py-4 text-left`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-sm">{p.n}</span>
                    <span className={`text-xs ${toneMap[p.tone].text}`}>
                      {open === p.n ? "−" : "+"}
                    </span>
                  </span>
                  {open === p.n ? (
                    <span className="text-muted-foreground mt-3 block text-[11px] tracking-[0.14em] uppercase">
                      {p.r}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* RELATIONSHIP ARCHITECTURE */}
      <Section>
        <Reveal>
          <p className="eyebrow">Leadership Architecture</p>
          <h3 className="font-display mt-5 text-2xl sm:text-3xl">
            One structure. Three levels of responsibility.
          </h3>
        </Reveal>
        <Reveal delay={100}>
          <div className="panel mt-10 p-7 sm:p-10">
            <div className="border-border/70 mx-auto mb-10 w-fit border px-6 py-3 text-center">
              <p className="text-[10px] tracking-[0.24em] uppercase">
                Digital Renaissance Metaverse™
              </p>
            </div>
            <div className="grid gap-5">
              {architectureRows.map((row) => (
                <div
                  key={row.label}
                  className={`grid gap-4 border-l-2 py-3 pl-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center ${toneMap[row.tone].border}`}
                >
                  <p className="text-muted-foreground text-[10px] tracking-[0.22em] uppercase">
                    {row.label}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {row.nodes.map((n) => (
                      <span
                        key={n}
                        className={`border-border bg-surface/60 rounded-sm border px-3 py-2 text-[10px] tracking-[0.14em] uppercase ${toneMap[row.tone].text}`}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="hairline my-10" />
            <p className="text-muted-foreground text-[10px] tracking-[0.24em] uppercase">
              Connected functions
            </p>
            <div className="mt-5 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              {[
                "RÉNAIO.CORE™",
                "Autonomous AI Executives",
                "Digital Ecosystems",
                "Corporate Development",
              ].map((f) => (
                <div key={f} className="border-border/60 border p-5">
                  <p className="text-sm">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* PHILOSOPHY + CTA */}
      <Section className="border-border border-t">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl leading-tight sm:text-3xl">
                One vision.
                <br />
                One architecture.
                <br />
                One execution standard.
              </h3>
            </div>
            <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
              <p>Digital Renaissance Metaverse is built around a simple principle:</p>
              <p>great technology requires more than powerful intelligence.</p>
              <p>
                It requires clear architecture, disciplined execution, strategic thinking and
                responsible leadership.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="border-border mt-16 border-t pt-12">
            <h3 className="font-display max-w-2xl text-2xl leading-tight sm:text-4xl">
              Building the future requires the right architecture.
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/technology"
                className="bg-primary text-primary-foreground rounded-sm px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
              >
                Explore our technology
              </Link>
              <Link
                to="/platforms"
                className="border-border hover:border-gold/50 rounded-sm border px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-colors"
              >
                Explore our ecosystem
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
