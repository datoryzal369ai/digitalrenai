import { Reveal } from "@/components/site/primitives";
import umraio from "@/assets/umraio.png.asset.json";
import renaiCore from "@/assets/renai-core.png.asset.json";
import umraverse from "@/assets/umraverse.png.asset.json";
import drm from "@/assets/drm-logo.png.asset.json";

/**
 * Brand hierarchy block:
 * UMRAIO® (product) → RÉNAI.CORE™ (intelligence) → UMRAVERSE® (ecosystem)
 * → Digital Renaissance Metaverse™ (corporate owner).
 * Presentation only.
 */

function Connector() {
  return (
    <div aria-hidden="true" className="mx-auto flex flex-col items-center py-8 sm:py-10">
      <span className="from-primary/60 h-14 w-px bg-gradient-to-b to-transparent" />
      <span className="border-primary/50 -mt-1 h-1.5 w-1.5 rotate-45 border-r border-b" />
    </div>
  );
}

function Tier({
  label,
  src,
  alt,
  caption,
  widthClass,
  delay = 0,
}: {
  label: string;
  src: string;
  alt: string;
  caption: string;
  widthClass: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="text-center">
      <p className="text-muted-foreground text-[10px] tracking-[0.34em] uppercase">{label}</p>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`mx-auto mt-6 w-full object-contain ${widthClass}`}
      />
      <p className="text-muted-foreground mt-5 text-[11px] tracking-[0.24em] uppercase">
        {caption}
      </p>
    </Reveal>
  );
}

export function BrandStack() {
  return (
    <div className="mx-auto max-w-4xl">
      <Tier
        label=""
        src={umraio.url}
        alt="UMRAIO® — Autonomous AI Business Executive"
        caption="Autonomous AI Business Executive"
        widthClass="max-w-[19rem] sm:max-w-[26rem] lg:max-w-[32rem]"
      />
      <Connector />
      <Tier
        label="Powered by"
        src={renaiCore.url}
        alt="RÉNAI.CORE™ — The Autonomous Intelligence Core"
        caption="The Autonomous Intelligence Core"
        widthClass="max-w-[9.5rem] sm:max-w-[13rem] lg:max-w-[15.5rem]"
        delay={80}
      />
      <Connector />
      <Tier
        label="Part of"
        src={umraverse.url}
        alt="UMRAVERSE® — Your Umrah Universe"
        caption="Your Umrah Universe"
        widthClass="max-w-[7.5rem] sm:max-w-[10rem] lg:max-w-[12rem]"
        delay={140}
      />
      <Connector />
      <Tier
        label="Developed and owned by"
        src={drm.url}
        alt="Digital Renaissance Metaverse™ corporate logo"
        caption="Reimagine • Rebuild • Redefine"
        widthClass="max-w-[6.5rem] sm:max-w-[8.5rem] lg:max-w-[10rem]"
        delay={200}
      />
    </div>
  );
}
