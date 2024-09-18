import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faHome } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos del sol y la luna
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <button onClick={() => window.location.href = '/'}>
              <FontAwesomeIcon icon={faHome} /> {/* Puedes cambiar este ícono por el logo de la marca */}
            </button>
          </li>
          <li>
            <button onClick={toggleTheme}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} /> {/* Cambia entre el sol y la luna */}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
