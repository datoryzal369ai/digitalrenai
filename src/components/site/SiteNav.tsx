import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/drm-logo.png.asset.json";

const nav = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/company" },
  { label: "Technology", to: "/technology" },
  { label: "Platforms", to: "/platforms" },
  { label: "Impact", to: "/impact" },
  { label: "Investors", to: "/investors" },
  { label: "Newsroom", to: "/newsroom" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-background/85 border-border border-b backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setOpen(false)} aria-label="Digital Renaissance Metaverse — Home">
          <img
            src={logo.url}
            alt="Digital Renaissance Metaverse logo"
            className="h-12 w-auto shrink-0 sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-muted-foreground hover:text-foreground text-[11px] tracking-[0.18em] uppercase transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/investors"
            className="border-primary/50 text-primary hover:bg-primary/10 hidden rounded-sm border px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors md:inline-flex"
          >
            Investor Access
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border-border flex h-10 w-10 items-center justify-center rounded-sm border lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`bg-foreground absolute left-0 block h-px w-4 transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`bg-foreground absolute left-0 block h-px w-4 transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-border bg-background/97 border-t backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-5 py-5 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-border/60 border-b py-3 text-sm tracking-[0.14em] uppercase"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
