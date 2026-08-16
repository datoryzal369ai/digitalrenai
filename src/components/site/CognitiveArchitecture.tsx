import { useState } from "react";

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

const GOVERNANCE = ["Security", "Policy", "Oversight", "Auditability", "Responsible AI", "Observability"];

const C = 260;
const R_INNER = 150;
const R_OUTER = 224;

export function CognitiveArchitecture({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const node = COGNITIVE[active]!;

  return (
    <div className={`grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center ${className}`}>
      <div className="relative mx-auto w-full max-w-xl">
        <svg viewBox="0 0 520 520" className="h-full w-full" role="img" aria-label="RÉNAIO.CORE cognitive architecture with governance control ring">
          <defs>
            <radialGradient id="rcCore" cx="50%" cy="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="70%" stopColor="var(--primary)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* governance outer ring */}
          <circle cx={C} cy={C} r={R_OUTER} fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.35" />
          <circle
            cx={C}
            cy={C}
            r={R_OUTER - 10}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.6"
            strokeDasharray="2 10"
            opacity="0.4"
            className="animate-orbit"
            style={{ transformOrigin: "260px 260px", animationDirection: "reverse", animationDuration: "60s" }}
          />
          {GOVERNANCE.map((g, i) => {
            const a = (Math.PI * 2 * i) / GOVERNANCE.length - Math.PI / 2;
            const x = C + Math.cos(a) * R_OUTER;
            const y = C + Math.sin(a) * R_OUTER;
            return (
              <g key={g}>
                <circle cx={x} cy={y} r="4" fill="var(--gold)" opacity="0.8" />
                <text
                  x={x}
                  y={y + (Math.sin(a) >= 0 ? 18 : -12)}
                  textAnchor="middle"
                  className="fill-gold text-[9px] tracking-[0.18em] uppercase"
                >
                  {g}
                </text>
              </g>
            );
          })}

          {/* cognitive loop */}
          <circle cx={C} cy={C} r="120" fill="url(#rcCore)" className="animate-corepulse" />
          <circle cx={C} cy={C} r={R_INNER} fill="none" stroke="var(--primary)" strokeWidth="0.8" opacity="0.3" />
          <circle
            cx={C}
            cy={C}
            r={R_INNER}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.4"
            strokeDasharray="6 90"
            opacity="0.9"
            className="animate-orbit"
            style={{ transformOrigin: "260px 260px", animationDuration: "18s" }}
          />

          {COGNITIVE.map((n, i) => {
            const a = (Math.PI * 2 * i) / COGNITIVE.length - Math.PI / 2;
            const x = C + Math.cos(a) * R_INNER;
            const y = C + Math.sin(a) * R_INNER;
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
                className="cursor-pointer outline-none"
              >
                <line
                  x1={C}
                  y1={C}
                  x2={x}
                  y2={y}
                  stroke="var(--primary)"
                  strokeWidth="0.6"
                  opacity={on ? 0.5 : 0.16}
                />
                <circle cx={x} cy={y} r={on ? 8 : 5} fill="var(--primary)" opacity={on ? 1 : 0.55} />
                <circle cx={x} cy={y} r="16" fill="transparent" />
                <text
                  x={x + Math.cos(a) * 26}
                  y={y + Math.sin(a) * 26 + 3}
                  textAnchor={Math.abs(Math.cos(a)) < 0.25 ? "middle" : Math.cos(a) > 0 ? "start" : "end"}
                  className={`text-[10px] tracking-[0.16em] uppercase ${on ? "fill-platinum" : "fill-muted-foreground"}`}
                >
                  {n.label}
                </text>
              </g>
            );
          })}

          <circle cx={C} cy={C} r="52" fill="var(--background)" stroke="var(--platinum)" strokeWidth="1" opacity="0.9" />
          <text x={C} y={C - 2} textAnchor="middle" className="fill-platinum text-[11px] tracking-[0.16em]">
            RÉNAI
          </text>
          <text x={C} y={C + 14} textAnchor="middle" className="fill-primary text-[11px] tracking-[0.16em]">
            .CORE™
          </text>
        </svg>
      </div>

      <div>
        <p className="eyebrow">Cognition inside. Governance around it.</p>
        <div className="panel mt-5 p-6">
          <div className="flex items-baseline gap-3">
            <span className="text-primary/70 font-display text-xs tracking-[0.2em]">{node.id}</span>
            <h3 className="font-display text-lg tracking-[0.08em] uppercase">{node.label}</h3>
          </div>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{node.desc}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
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
        <div className="border-gold/25 bg-gold/5 mt-6 rounded-sm border p-5">
          <p className="text-gold text-[10px] tracking-[0.2em] uppercase">Governance & control layer</p>
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
