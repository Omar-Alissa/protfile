import SkillsSection from './SkillsSection';
import '../styles/About.css';
import myPhoto from '../assets/MyPhoto.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          Om <span className="section-title-accent">mig</span>
        </h2>
        
        <div className="about-grid">
          <div className="profile-image-container">
            <div className="profile-image-wrapper">              <img 
                src={myPhoto} 
                alt="Omar Alissa" 
                className="profile-image"
              />
            </div>
          </div>
          
          <div>
            <h3 className="about-content-title">Vem är jag?</h3>
            <p className="about-text">
              Jag är en passionerad webbutvecklare med fokus på att skapa moderna och användbara webbapplikationer. 
              Med en stark grund i både front-end och back-end teknik, strävar jag efter att leverera högkvalitativa 
              lösningar som överträffar förväntningarna.
            </p>
            <p className="about-text">
              Jag har alltid varit fascinerad av teknikens möjligheter och hur man kan använda den för att lösa 
              vardagliga problem. När jag inte kodar, gillar jag att promenera i naturen och läsa böcker.
            </p>
            <a 
              href="/Omar_Alissa_CV_LIA1.pdf" 
              download 
              className="download-cv-button"
              style={{ display: 'inline-block', marginTop: '1.5rem', fontWeight: 600, fontSize: '1.1rem', borderRadius: '999px', padding: '0.75rem 2rem', background: 'var(--accent-color)', color: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', textDecoration: 'none' }}
            >
              Ladda ner CV
            </a>
          </div>
        </div>
        
        <SkillsSection />
      </div>
    </section>  );
};

export default About;
