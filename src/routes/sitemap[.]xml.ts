import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Absolute URLs are derived from the incoming request origin so the sitemap
// stays valid on preview, the Lovable domain and any custom domain.


interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/company", changefreq: "monthly", priority: "0.8" },
          { path: "/technology", changefreq: "monthly", priority: "0.9" },
          { path: "/platforms", changefreq: "monthly", priority: "0.9" },
          { path: "/impact", changefreq: "monthly", priority: "0.6" },
          { path: "/investors", changefreq: "monthly", priority: "0.8" },
          { path: "/newsroom", changefreq: "weekly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.5" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
