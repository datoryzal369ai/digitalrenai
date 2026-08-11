import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        shown
          ? { animation: `drm-rise 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms both` }
          : { opacity: 0 }
      }
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl leading-[1.08] font-semibold text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

export function StatusTag({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "gold" | "violet" | "amber" | "muted";
}) {
  const tones: Record<string, string> = {
    cyan: "text-primary border-primary/40 bg-primary/10",
    gold: "text-gold border-gold/40 bg-gold/10",
    violet: "text-violet-brand border-violet-brand/40 bg-violet-brand/10",
    amber: "text-amber-brand border-amber-brand/40 bg-amber-brand/10",
    muted: "text-muted-foreground border-border bg-secondary/50",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] tracking-[0.18em] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function FlowChain({ steps, dense = false }: { steps: string[]; dense?: boolean }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span
            className={`border-border bg-surface/70 rounded-sm border px-3 py-2 tracking-[0.12em] uppercase ${dense ? "text-[10px]" : "text-[11px]"}`}
          >
            {s}
          </span>
          {i < steps.length - 1 ? <span className="text-primary/70 text-xs">→</span> : null}
        </li>
      ))}
    </ol>
  );
}
