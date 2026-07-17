/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        neutral: "var(--color-neutral)",
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        subtle: "var(--color-subtle)",
        line: "var(--color-line)",
        accent: "var(--color-accent)",
      },
      fontFamily: {
        headline: "var(--font-headline)",
        body: "var(--font-body)",
        label: "var(--font-label)",
      },
      fontSize: {
        xs: ["0.8rem", { lineHeight: "1.5" }],
        sm: ["0.95rem", { lineHeight: "1.5" }],
        base: ["1.18rem", { lineHeight: "1.65" }],
        lg: ["1.475rem", { lineHeight: "1.35" }],
        xl: ["1.844rem", { lineHeight: "1.2" }],
        "2xl": ["2.305rem", { lineHeight: "1.15" }],
        "3xl": ["2.881rem", { lineHeight: "1.1" }],
      },
      maxWidth: {
        shell: "1100px",
        content: "860px",
        prose: "610px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        template: "8px",
      },
    },
  },
  plugins: [],
};
