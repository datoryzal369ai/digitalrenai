import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Section, SectionHead, StatusTag } from "@/components/site/primitives";
import umraverse from "@/assets/umraverse.png.asset.json";
import umraio from "@/assets/umraio.png.asset.json";
import aiExecutives from "@/assets/ai-executives.png.asset.json";

const title = "Platforms — UMRAVERSE®, WORVERSE® and MEDIVERSE® Ecosystems";
const description =
  "Vertical digital ecosystems and their autonomous AI business executives: UMRAIO® for Umrah agencies, WORIO® for workforce agencies and MEDIO® for medical tourism.";

export const Route = createFileRoute("/platforms")({
  component: Platforms,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/platforms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/platforms" }],
  }),
});

function Platforms() {
  return (
    <>
      <Section className="pt-36">
        <Reveal>
          <SectionHead
            eyebrow="AI Platform Portfolio"
            title="One intelligence core, deployed vertical by vertical."
            intro="Each ecosystem carries the domain knowledge of its industry. Each autonomous AI business executive operates inside it, powered by RÉNAI.CORE™."
          />
        </Reveal>
        <Reveal delay={140}>
          <img
            src={aiExecutives.url}
            alt="Autonomous AI business executives across the Digital Renaissance ecosystems"
            className="mt-14 w-full rounded-sm"
            loading="lazy"
          />
        </Reveal>
      </Section>

      <Section className="border-border border-y">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <img
              src={umraio.url}
              alt="UMRAIO® — Autonomous AI Business Executive"
              className="w-full max-w-[20rem] object-contain sm:max-w-[26rem]"
              loading="lazy"
            />
            <p className="text-muted-foreground mt-6 text-[11px] tracking-[0.32em] uppercase">
              Autonomous AI Business Executive
            </p>
            <h2 className="mt-7 text-3xl leading-[1.06] font-semibold text-balance sm:text-4xl">
              Your AI workforce. Working 24/7.
            </h2>
            <p className="text-muted-foreground mt-5 max-w-md leading-relaxed">
              Built to help Umrah agencies generate leads, respond faster, close sales and grow more
              efficiently.
            </p>
            <div className="mt-8">
              <StatusTag tone="cyan">Flagship · Active Development</StatusTag>
            </div>
            <Link
              to="/contact"
              className="border-primary/50 text-primary hover:bg-primary/10 mt-9 inline-flex rounded-sm border px-6 py-3.5 text-[11px] tracking-[0.18em] uppercase transition-colors"
            >
              Request a Platform Briefing
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel p-7 sm:p-9">
              <p className="eyebrow">Capabilities</p>
              <ul className="text-muted-foreground mt-6 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                {[
                  "Lead intelligence",
                  "Customer intent detection",
                  "WhatsApp AI executive",
                  "Follow-up engine",
                  "Quotation generation",
                  "Marketing support",
                  "Business analytics",
                  "Next-action recommendations",
                ].map((f) => (
                  <li key={f} className="border-border/50 border-b py-1.5">
                    {f}
                  </li>
                ))}
              </ul>
              <div className="hairline my-8" />
              <p className="text-muted-foreground text-[11px] tracking-[0.24em] uppercase">
                Ecosystem
              </p>
              <div className="mt-5 flex items-center gap-6">
                <img
                  src={umraverse.url}
                  alt="UMRAVERSE® — Your Umrah Universe"
                  className="w-full max-w-[9rem] shrink-0 object-contain"
                  loading="lazy"
                />
                <p className="text-muted-foreground min-w-0 text-[13px] leading-relaxed">
                  UMRAVERSE® is the Islamic travel and Umrah digital ecosystem in which UMRAIO®
                  operates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>


      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              name: "WORVERSE®",
              exec: "WORIO®",
              domain: "Workforce & Employment Digital Ecosystem",
              desc: "Autonomous AI Business Executive designed for workforce and employment agencies — sourcing, screening, coordination and compliance-heavy operations.",
              tone: "violet" as const,
            },
            {
              name: "MEDIVERSE®",
              exec: "MEDIO®",
              domain: "Medical Tourism & Healthcare Digital Ecosystem",
              desc: "Autonomous AI Business Executive designed for medical tourism operators — patient enquiry handling, coordination, quotation and journey management.",
              tone: "amber" as const,
            },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="panel h-full p-8">
                <StatusTag tone={p.tone}>Strategic Development</StatusTag>
                <h3 className="font-display mt-6 text-2xl">{p.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{p.domain}</p>
                <div className="hairline my-6" />
                <p className="font-display text-primary text-lg">{p.exec}</p>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-xs">
          Development status is stated explicitly. Capabilities described for platforms in strategic
          development represent design intent, not released features.
        </p>
      </Section>
    </>
  );
}
