import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { fetchUserRepos, formatRepoData } from '../utils/github';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        // Hämta projekt från GitHub API
        const repos = await fetchUserRepos();
        let formattedRepos = [];
        if (repos.length > 0) {
          formattedRepos = formatRepoData(repos);
        }
        setProjects(formattedRepos);
      } catch (err) {
        console.error('Fel vid hämtning av projekt:', err);
        setError('Kunde inte hämta projekt.');
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span style={{ display: 'inline-block', fontWeight: 700, fontSize: '2.2rem', letterSpacing: '0.02em', marginBottom: '0.5rem' }}>
            Mina <span className="section-title-accent">projekt</span>
          </span>
        </h2>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
        <div className="github-link-container">
          <a 
            href="https://github.com/Omar-Alissa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
            style={{ fontWeight: 600, fontSize: '1.1rem', borderRadius: '999px', padding: '0.75rem 2rem', background: 'var(--accent-color)', color: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >
            Se alla projekt på GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
