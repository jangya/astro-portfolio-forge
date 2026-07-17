export const siteConfig = {
  name: "Your Name",
  tagline: "Frontend Engineer building precise, accessible product interfaces.",
  introGreeting: "Hello! I am Your Name.",
  bio: [
    "I build front-end systems that are fast, accessible, and honest about what they are doing.",
    "This template is designed for engineers, designers, writers, and builders who want a quiet portfolio that is easy to fork, configure, and publish.",
  ],
  avatar: "https://github.com/octocat.png",
  location: "Your City",
  email: "hello@example.com",
  githubUsername: "octocat",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/octocat" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects/" },
    { label: "Insights", href: "/insights/" },
    { label: "Resume", href: "/resume.pdf" },
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Example Studio",
      location: "Remote",
      period: "2022 - Present",
      highlight: "Leading accessible interface systems for complex products.",
      bullets: [
        "Built reusable UI foundations with Astro, TypeScript, and design tokens.",
        "Partnered with product and design to make high-trust workflows feel calm and clear.",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Example Labs",
      location: "Remote",
      period: "2019 - 2022",
      highlight: "Shipped polished web experiences for fast-moving product teams.",
      bullets: [
        "Improved performance, content workflows, and responsive design quality.",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "Example University",
      period: "2015 - 2019",
      note: "Focus on human-computer interaction and distributed systems.",
    },
  ],
  featuredRepos: ["Spoon-Knife", "Hello-World"],
};

export const templateConfig = {
  name: "Astro Portfolio Forge",
  repoUrl: "https://github.com/jangya/astro-portfolio-forge",
  badgeLabel: "Built with Astro Portfolio Forge",
};

export const seoConfig = {
  title: "Your Name - Portfolio",
  description:
    "A precise, static Astro portfolio template with Markdown writing, Decap CMS, and build-time GitHub projects.",
  ogImage: "/og.png",
  twitterHandle: "",
};

export const themeConfig = {
  colors: {
    primary: "#111111",
    secondary: "#333333",
    tertiary: "#121110",
    neutral: "#F5F5F5",
    surface: "#FFFFFF",
    muted: "#777777",
    subtle: "#BBBBBB",
    line: "#E5E5E5",
    accent: "#C0392B",
  },
  fonts: {
    headline: 'Georgia, "Times New Roman", serif',
    body: 'Georgia, "Times New Roman", serif',
    label: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
};

export const projectConfig = {
  mode: "featured" as const,
  includeTopics: true,
  fallbackProjects: [
    {
      name: "portfolio-template",
      description:
        "A configurable static portfolio template built with Astro, Tailwind CSS, Markdown, and Decap CMS.",
      html_url: templateConfig.repoUrl,
      stargazers_count: 0,
      topics: ["astro", "tailwind", "portfolio"],
    },
  ],
};
