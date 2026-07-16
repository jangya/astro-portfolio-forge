import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/\.md$/, "");
}

export function getPostBody(post: BlogPost) {
  return post.body ?? "";
}
