const base = import.meta.env.BASE_URL;

export function withBase(path: string) {
  if (path.startsWith("http") || path.startsWith("mailto:")) return path;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`.replace(/\/{2,}/g, "/");
}
