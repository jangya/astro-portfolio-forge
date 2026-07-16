import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { seoConfig, siteConfig } from "../config";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
  );

  return rss({
    title: `${siteConfig.name} - Insights`,
    description: seoConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/insights/${post.slug}/`,
    })),
  });
}
