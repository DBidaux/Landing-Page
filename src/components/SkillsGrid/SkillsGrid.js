import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faGithub, faSass, faPython, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faMobileAlt, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { Icon } from '@iconify/react'; // Importar Iconify
import flaskIcon from '@iconify/icons-logos/flask'; // Flask Icon de la colección Logos
import jwtIcon from '@iconify/icons-logos/jwt'; // JWT Icon de la colección Logos
import './SkillsGrid.css';

const SkillsGrid = () => {
  const skills = [
    { name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" /> }, 
    { name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" /> }, 
    { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} size="3x" color="#F7DF1E" /> },
    { name: 'React', icon: <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" /> },
    { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} size="3x" color="#F05032" /> },
    { name: 'Github', icon: <FontAwesomeIcon icon={faGithub} size="3x" color="#181717" /> },
    { name: 'SASS', icon: <FontAwesomeIcon icon={faSass} size="3x" color="#CC6699" /> },
    { name: 'RESTful APIs', icon: <FontAwesomeIcon icon={faCogs} size="3x" color="#F06529" /> },
    { name: 'Responsive Websites', icon: <FontAwesomeIcon icon={faMobileAlt} size="3x" color="#F06529" /> },
    { name: 'Web Accessibility', icon: <FontAwesomeIcon icon={faUniversalAccess} size="3x" color="#005A9C" /> },
    { name: 'Python', icon: <FontAwesomeIcon icon={faPython} size="3x" color="#3776AB" /> },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} size="3x" color="#68A063" /> },
    { name: 'Flask', icon: <Icon icon={flaskIcon} width="50px" height="50px" />, color: '#000000' },
    { name: 'JWT', icon: <Icon icon={jwtIcon} width="50px" height="50px" />, color: '#000000' },
    { name: 'Linux', icon: <FontAwesomeIcon icon={faLinux} size="3x" color="#FCC624" /> }
  ];

  return (
    <div className="skills-container">
      <h2>My Toolbox & Things I Can Do</h2>
      <p>The skills, tools and technologies I use to bring your products to life:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
