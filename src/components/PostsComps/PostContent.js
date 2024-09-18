import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PostContent() {
  return (
    <div className="post-container">
      <div>
        <h1 className="post-username h1-center">
          Some of my repositories on <span><FontAwesomeIcon icon={faGithub} /></span>:
        </h1>
      </div>
      <div className="post-body">
        <ul className='list-style'>
          <li>
            <a href="https://github.com/DBidaux/Spython-Invaders">Spython Invaders</a>
            <p>Classic arcade game developed using Python and Pygame.</p>
          </li>
          <li>
            <a href="https://github.com/DBidaux/To-Do-App">To-Do App</a>
            <p>A simple To-Do list app built using React and Flask.</p>
          </li>
          <li>
            <a href="https://github.com/DBidaux/TMDB-Upcoming-Movies">TMDB Upcoming Movies</a>
            <p>A movie app that fetches data from the TMDB API to show upcoming movies.</p>
          </li>
          <li>
            <a href="https://github.com/DBidaux/ReactCalculator">React Calculator</a>
            <p>A functional calculator application created with React.</p>
          </li>
          <li>
            <a href="https://github.com/DBidaux/horizon-27">Cuadrilla Golfes App</a>
            <p>A social app built for organizing golf matches among friends.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
