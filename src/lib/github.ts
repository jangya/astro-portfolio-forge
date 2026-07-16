import { projectConfig, siteConfig } from "../config";

export type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  topics?: string[];
  updated_at?: string;
};

const featured = new Set(siteConfig.featuredRepos.map((repo) => repo.toLowerCase()));

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
  const endpoint = `https://api.github.com/users/${siteConfig.githubUsername}/repos?sort=updated&per_page=100`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub responded with ${response.status}`);
    }

    const repos = (await response.json()) as GitHubRepo[];
    const featuredRepos = repos.filter((repo) =>
      featured.has(repo.name.toLowerCase()),
    );

    return featuredRepos.length > 0 ? featuredRepos : projectConfig.fallbackProjects;
  } catch (error) {
    console.warn(
      `GitHub project fetch failed. Rendering fallback projects instead. ${error}`,
    );
    return projectConfig.fallbackProjects;
  }
}
