import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/** Every public route. No blog entries — this template ships without a blog. */
const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/pricing", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/waitlist", priority: 0.8 },
  { path: "/changelog", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
