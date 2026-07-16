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
        sm: ["1rem", { lineHeight: "1.6" }],
        base: ["1.25rem", { lineHeight: "1.65" }],
        lg: ["1.563rem", { lineHeight: "1.35" }],
        xl: ["1.953rem", { lineHeight: "1.25" }],
        "2xl": ["2.441rem", { lineHeight: "1.18" }],
        "3xl": ["3.052rem", { lineHeight: "1.12" }]
      },
      maxWidth: {
        shell: "1100px",
        content: "860px",
        prose: "640px",
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
