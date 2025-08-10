/**
 * Hjälpfunktioner för att hämta data från GitHub API
 */

const GITHUB_API_BASE = 'https://api.github.com';
const USERNAME = 'Omar-Alissa'; // GitHub-användarnamn

/**
 * Hämta användarens GitHub-repositories
 */
export const fetchUserRepos = async () => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${USERNAME}/repos?sort=updated&per_page=10`);
    if (!response.ok) {
      throw new Error(`GitHub API Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

/**
 * Bearbeta repos-data för att matcha vår projektstruktur
 */
export const formatRepoData = (repos) => {
  return repos.map(repo => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || 'Ingen beskrivning tillgänglig',
    image: `https://opengraph.githubassets.com/1/${USERNAME}/${repo.name}`,
    technologies: [repo.language].filter(Boolean),
    github: repo.html_url,
    demo: repo.homepage || null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: new Date(repo.updated_at).toLocaleDateString('sv-SE')
  }));
};
