import { useState } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaComments,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiMongodb
} from 'react-icons/si';
import { GrLanguage } from 'react-icons/gr';
import '../styles/Skills.css';

const SkillCard = ({ icon, skill, description }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        {icon}
      </div>
      <h4 className="skill-name">{skill}</h4>
      <p className="skill-description">{description}</p>
    </div>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('tekniska');
  
  const technicalSkills = [
    { 
      skill: 'HTML5',
      icon: <FaHtml5 size={40} />,
      description: 'Semantisk HTML och tillgänglighet'
    },
    { 
      skill: 'CSS3',
      icon: <FaCss3Alt size={40} />,
      description: 'Responsiv design och animationer'
    },
    { 
      skill: 'JavaScript',
      icon: <FaJs size={40} />,
      description: 'ES6+ och moderna funktioner'
    },
    { 
      skill: 'React',
      icon: <FaReact size={40} />,
      description: 'Komponenter och hooks'
    },
    { 
      skill: 'Node.js',
      icon: <FaNodeJs size={40} />,
      description: 'Backend-utveckling'
    },
    { 
      skill: 'Git',
      icon: <FaGitAlt size={40} />,
      description: 'Versionshantering'
    },
    { 
      skill: 'SQLite',
      icon: <FaDatabase size={40} />,
      description: 'Relationsdatabas med SQL'
    }
  ];
  
  const softSkills = [
    { 
      skill: 'Kommunikation',
      icon: <FaComments size={40} />,
      description: 'Tydlig och effektiv kommunikation'
    },
    { 
      skill: 'Problemlösning',
      icon: <FaLightbulb size={40} />,
      description: 'Analytiskt och kreativt tänkande'
    },
    { 
      skill: 'Teamarbete',
      icon: <FaUsers size={40} />,
      description: 'Samarbete och laganda'
    },
    { 
      skill: 'Tidshantering',
      icon: <FaClock size={40} />,
      description: 'Effektiv planering och prioritering'
    }
  ];
    const languages = [
    { 
      skill: 'Svenska',
      icon: <GrLanguage size={40} />,
      description: 'Flytande i tal och skrift'
    },
    { 
      skill: 'Engelska',
      icon: <GrLanguage size={40} />,
      description: 'Professionell arbetsnivå'
    }
  ];
  
  const renderSkills = () => {
    let skillsToRender = [];
    
    switch (activeTab) {
      case 'tekniska':
        skillsToRender = technicalSkills;
        break;
      case 'mjuka':
        skillsToRender = softSkills;
        break;
      case 'språk':
        skillsToRender = languages;
        break;
      default:
        skillsToRender = technicalSkills;
    }
    
    return (
      <div className="skills-content">
        {skillsToRender.map((item, index) => (
          <SkillCard 
            key={index} 
            icon={item.icon}
            skill={item.skill}
            description={item.description}
          />
        ))}
      </div>
    );
  };
  
  return (
    <div className="skills-section">
      <h3 className="skills-title">Mina färdigheter</h3>
      
      <div className="skills-tabs">
        <div className="skills-tabs-container">
          <button 
            onClick={() => setActiveTab('tekniska')}
            className={`tab-button ${activeTab === 'tekniska' ? 'active' : ''}`}
          >
            Tekniska
          </button>
          <button 
            onClick={() => setActiveTab('mjuka')}
            className={`tab-button ${activeTab === 'mjuka' ? 'active' : ''}`}
          >
            Mjuka
          </button>
          <button 
            onClick={() => setActiveTab('språk')}
            className={`tab-button ${activeTab === 'språk' ? 'active' : ''}`}
          >
            Språk
          </button>
        </div>
      </div>
      
      {renderSkills()}
    </div>
  );
};

export default SkillsSection;
