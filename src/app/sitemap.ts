import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${DATA.url}/blog/${post._meta.path}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: DATA.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${DATA.url}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...posts];
}
