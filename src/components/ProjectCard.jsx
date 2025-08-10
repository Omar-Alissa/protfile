import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  // Om projektet kommer från GitHub (dvs har stars/forks/updatedAt eller saknar demo/image/description)
  if (project.github && (!project.demo || !project.image || !project.description)) {
    return (
      <div className="project-card github-project-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px', padding: '2rem 1rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <FaGithub size={40} style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
        <h3 className="project-title" style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>{project.title || project.name}</h3>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
          style={{ fontWeight: 600, fontSize: '1rem', background: 'var(--accent-color)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '999px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', transition: 'background 0.2s' }}
        >
          Visa på GitHub
        </a>
      </div>
    );
  }

  return (
    <div className="project-card">
      <img 
        src={project.image || 'https://via.placeholder.com/500x300?text=Project+Image'} 
        alt={project.title} 
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tech-tags">
          {project.technologies && project.technologies.map((tech, index) => (
            tech && (
              <span 
                key={index} 
                className="tech-tag"
              >
                {tech}
              </span>
            )
          ))}
        </div>
        
        <div className="project-links">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >              <FaGithub /> Kod
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
