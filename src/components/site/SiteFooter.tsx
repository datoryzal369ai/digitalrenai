import { Link } from "@tanstack/react-router";
import logo from "@/assets/drm-mark.png.asset.json";

const columns = [
  {
    title: "Technology",
    links: [
      { label: "RÉNAI.CORE™", href: "https://renai-core.lovable.app" },
      { label: "Technology Overview", to: "/technology" },
      { label: "AI Governance", to: "/technology" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "UMRAVERSE®", to: "/platforms" },
      { label: "UMRAIO®", href: "https://www.umraio.com" },
      { label: "WORVERSE® / WORIO®", to: "/platforms" },
      { label: "MEDIVERSE® / MEDIO®", to: "/platforms" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { label: "Company", to: "/company" },
      { label: "Impact", to: "/impact" },
      { label: "Investors", to: "/investors" },
      { label: "Newsroom", to: "/newsroom" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Explore RÉNAI.CORE →", href: "https://renai-core.lovable.app" },
      { label: "Explore UMRAIO →", href: "https://www.umraio.com" },
    ],
  },
] as const;


export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div>
            <img
              src={logo.url}
              alt="Digital Renaissance Metaverse logo"
              className="h-24 w-auto sm:h-28"
              loading="lazy"
            />
            <p className="text-muted-foreground mt-5 max-w-xs text-sm leading-relaxed">
              An AI technology company building autonomous intelligence for the real economy.
            </p>
            <p className="text-gold mt-5 text-[11px] tracking-[0.3em] uppercase">
              Reimagine • Rebuild • Redefine
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] tracking-[0.22em] uppercase">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {"href" in l ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary text-[13px] transition-colors"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          to={l.to}
                          className="text-muted-foreground hover:text-primary text-[13px] transition-colors"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

            ))}
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="text-muted-foreground flex flex-col gap-4 text-[11px] tracking-[0.1em] uppercase md:flex-row md:items-center md:justify-between">
          <p>© 2026 Digital Renaissance Metaverse. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>AI Governance</li>
            <li>Cookie Policy</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <p className="text-muted-foreground/70 mt-6 text-[11px] leading-relaxed">
          Trademark and registration symbols reflect brand usage within the Digital Renaissance
          portfolio and are subject to applicable registration status in each jurisdiction.
        </p>
      </div>
    </footer>
  );
}
