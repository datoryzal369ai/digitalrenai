import { useState } from "react";
import renaiCore from "@/assets/renai-core-mark.png.asset.json";

const COGNITIVE = [
  { id: "01", label: "Perceive", desc: "Observe signals, events, users, environments and operational activity." },
  { id: "02", label: "Understand", desc: "Interpret business, domain, user and environmental context." },
  { id: "03", label: "Remember", desc: "Retrieve relevant knowledge, history, experience and operational memory." },
  { id: "04", label: "Reason", desc: "Analyse information, relationships, constraints, objectives and outcomes." },
  { id: "05", label: "Plan", desc: "Determine strategies, workflows and possible courses of action." },
  { id: "06", label: "Decide", desc: "Select the next action against objectives, permissions and constraints." },
  { id: "07", label: "Act", desc: "Execute approved workflows, tools and operational tasks." },
  { id: "08", label: "Evaluate", desc: "Measure outcomes, performance, quality and consequences." },
  { id: "09", label: "Learn", desc: "Capture experience and improve within defined governance boundaries." },
];

const GOVERNANCE = ["Security", "Policy", "Oversight", "Responsible AI", "Auditability", "Observability"];

const C = 310;
const R_INNER = 170;
const R_OUTER = 252;

function polar(r: number, i: number, n: number, offset = 0) {
  const a = (Math.PI * 2 * (i + offset)) / n - Math.PI / 2;
  return { a, x: C + Math.cos(a) * r, y: C + Math.sin(a) * r };
}

function Diagram({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <svg
      viewBox="0 0 620 620"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="RÉNAI.CORE cognitive intelligence loop inside a governance and control ring"
    >
      <defs>
        <radialGradient id="rcNucleus" cx="50%" cy="45%">
          <stop offset="0%" stopColor="var(--platinum)" stopOpacity="0.55" />
          <stop offset="35%" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--background)" stopOpacity="1" />
        </radialGradient>
        <radialGradient id="rcField" cx="50%" cy="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.30" />
          <stop offset="65%" stopColor="var(--primary)" stopOpacity="0.06" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rcRim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--platinum)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.45" />
        </linearGradient>
        <filter id="rcGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Level 3 · Governance & control ring (gold) ── */}
      <circle cx={C} cy={C} r={R_OUTER + 14} fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.22" />
      <circle cx={C} cy={C} r={R_OUTER} fill="none" stroke="var(--gold)" strokeWidth="1.1" opacity="0.55" />
      <circle
        cx={C}
        cy={C}
        r={R_OUTER - 11}
        fill="none"
        stroke="var(--gold)"
        strokeWidth="0.8"
        strokeDasharray="2 12"
        opacity="0.5"
        className="animate-orbit"
        style={{ transformOrigin: `${C}px ${C}px`, animationDirection: "reverse", animationDuration: "72s" }}
      />
      {GOVERNANCE.map((g, i) => {
        const { a, x, y } = polar(R_OUTER, i, GOVERNANCE.length, 0.5);
        return (
          <g key={g}>
            <circle cx={x} cy={y} r="9" fill="var(--background)" stroke="var(--gold)" strokeWidth="1" opacity="0.9" />
            <circle cx={x} cy={y} r="3.4" fill="var(--gold)" />
            <text
              x={x}
              y={y + (Math.sin(a) >= 0 ? 28 : -19)}
              textAnchor="middle"
              className="fill-gold text-[11px] tracking-[0.2em] uppercase"
              opacity="0.95"
            >
              {g}
            </text>
          </g>
        );
      })}
      <text
        x={C}
        y={C - R_OUTER - 34}
        textAnchor="middle"
        className="fill-gold text-[10px] tracking-[0.32em] uppercase"
        opacity="0.75"
      >
        Governance &amp; Control
      </text>

      {/* ── Level 2 · Cognitive loop (cyan) ── */}
      <circle cx={C} cy={C} r={R_INNER} fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.28" />
      <circle
        cx={C}
        cy={C}
        r={R_INNER}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="3 46"
        opacity="0.9"
        className="animate-dashflow"
        filter="url(#rcGlow)"
      />
      <circle
        cx={C}
        cy={C}
        r={R_INNER - 8}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 70"
        opacity="0.5"
        className="animate-dashflow"
        style={{ animationDuration: "22s" }}
      />

      {COGNITIVE.map((n, i) => {
        const { a, x, y } = polar(R_INNER, i, COGNITIVE.length);
        const on = i === active;
        return (
          <g
            key={n.label}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            tabIndex={0}
            role="button"
            aria-label={n.label}
            aria-pressed={on}
            className="cursor-pointer outline-none"
          >
            <line
              x1={C}
              y1={C}
              x2={x}
              y2={y}
              stroke="var(--primary)"
              strokeWidth={on ? 1.2 : 0.6}
              opacity={on ? 0.6 : 0.14}
            />
            {on && <circle cx={x} cy={y} r="18" fill="var(--primary)" opacity="0.14" />}
            <circle
              cx={x}
              cy={y}
              r={on ? 9 : 6}
              fill="var(--primary)"
              opacity={on ? 1 : 0.6}
              filter={on ? "url(#rcGlow)" : undefined}
            />
            <circle cx={x} cy={y} r="22" fill="transparent" />
            <text
              x={x + Math.cos(a) * 32}
              y={y + Math.sin(a) * 32 + 4}
              textAnchor={Math.abs(Math.cos(a)) < 0.25 ? "middle" : Math.cos(a) > 0 ? "start" : "end"}
              className={`text-[12px] tracking-[0.2em] uppercase ${on ? "fill-platinum" : "fill-muted-foreground"}`}
            >
              {n.label}
            </text>
          </g>
        );
      })}

      {/* ── Level 1 · Intelligence nucleus ── */}
      <circle cx={C} cy={C} r="128" fill="url(#rcField)" className="animate-breathe" />
      <circle cx={C} cy={C} r="74" fill="url(#rcNucleus)" className="animate-nucleus" />
      <circle cx={C} cy={C} r="60" fill="var(--background)" opacity="0.92" />
      <image
        href={renaiCore.url}
        x={C - 44}
        y={C - 50}
        width="88"
        height="88"
        opacity="0.28"
        preserveAspectRatio="xMidYMid meet"
      />
      <circle cx={C} cy={C} r="60" fill="none" stroke="url(#rcRim)" strokeWidth="1.2" opacity="0.9" />
      <circle
        cx={C}
        cy={C}
        r="68"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1"
        strokeDasharray="1 8"
        opacity="0.45"
        className="animate-orbit"
        style={{ transformOrigin: `${C}px ${C}px`, animationDuration: "36s" }}
      />
      <text x={C} y={C - 2} textAnchor="middle" className="fill-platinum text-[13px] tracking-[0.18em]">
        RÉNAI
      </text>
      <text x={C} y={C + 16} textAnchor="middle" className="fill-primary text-[13px] tracking-[0.18em]">
        .CORE™
      </text>
      <text
        x={C}
        y={C + 38}
        textAnchor="middle"
        className="fill-muted-foreground text-[8px] tracking-[0.28em] uppercase"
      >
        Intelligence Core
      </text>
    </svg>
  );
}

function MobileArchitecture({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <div className="lg:hidden">
      <div className="border-gold/30 bg-gold/5 rounded-sm border p-4">
        <p className="text-gold text-[9px] tracking-[0.28em] uppercase">Governance &amp; Control</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {GOVERNANCE.map((g) => (
            <span
              key={g}
              className="border-gold/30 text-gold/90 rounded-full border px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase"
            >
              {g}
            </span>
          ))}
        </div>

        <div className="border-primary/25 bg-background relative mt-4 rounded-sm border p-5">
          <div className="relative mx-auto grid h-28 w-28 place-items-center">
            <span className="bg-primary/15 animate-breathe absolute inset-0 rounded-full blur-xl" />
            <span className="border-platinum/40 animate-nucleus absolute inset-3 rounded-full border" />
            <img src={renaiCore.url} alt="" aria-hidden className="absolute h-16 w-16 opacity-25" />
            <div className="relative text-center">
              <p className="text-platinum font-display text-sm tracking-[0.16em]">RÉNAI</p>
              <p className="text-primary font-display text-sm tracking-[0.16em]">.CORE™</p>
            </div>
          </div>
          <p className="text-muted-foreground mt-2 text-center text-[9px] tracking-[0.28em] uppercase">
            Intelligence Core
          </p>

          <ol className="mt-6 space-y-px">
            {COGNITIVE.map((n, i) => {
              const on = i === active;
              return (
                <li key={n.label}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    className={`flex w-full items-center gap-4 rounded-sm border px-4 py-3.5 text-left transition-colors ${
                      on
                        ? "border-primary/60 bg-primary/10"
                        : "border-border/70 hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`font-display shrink-0 text-[11px] tracking-[0.2em] ${on ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {n.id}
                    </span>
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${on ? "bg-primary shadow-[0_0_12px_var(--primary)]" : "bg-primary/40"}`}
                    />
                    <span
                      className={`min-w-0 truncate text-[13px] tracking-[0.18em] uppercase ${on ? "text-platinum" : "text-muted-foreground"}`}
                    >
                      {n.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <p className="text-muted-foreground mt-4 text-center text-[9px] tracking-[0.24em] uppercase">
            Controlled feedback → Perceive
          </p>
        </div>
      </div>
    </div>
  );
}

export function CognitiveArchitecture({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const node = COGNITIVE[active]!;

  return (
    <div className={`grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center ${className}`}>
      <div className="relative mx-auto w-full max-w-2xl">
        <div className="hidden lg:block">
          <Diagram active={active} setActive={setActive} />
        </div>
        <MobileArchitecture active={active} setActive={setActive} />
      </div>

      <div>
        <p className="eyebrow">Cognition inside. Governance around it.</p>
        <div className="panel border-primary/40 mt-5 p-6 shadow-[0_0_40px_-24px_var(--primary)]">
          <div className="flex items-baseline gap-3">
            <span className="text-primary font-display text-xs tracking-[0.2em]">{node.id}</span>
            <h3 className="font-display text-lg tracking-[0.08em] uppercase">{node.label}</h3>
          </div>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{node.desc}</p>
        </div>
        <div className="mt-6 hidden flex-wrap gap-2 lg:flex">
          {COGNITIVE.map((n, i) => (
            <button
              key={n.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`rounded-sm border px-3 py-2 text-[10px] tracking-[0.16em] uppercase transition-colors ${
                i === active
                  ? "border-primary/60 text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
        <div className="border-gold/30 bg-gold/5 mt-6 rounded-sm border p-5">
          <p className="text-gold text-[10px] tracking-[0.2em] uppercase">Governance &amp; control layer</p>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            Governance is not a step in the loop. It is a horizontal control architecture applied
            across every stage — security, policy, permissions, human oversight, auditability,
            explainability, responsible AI, domain governance, compliance and observability.
          </p>
        </div>
      </div>
    </div>
  );
}
