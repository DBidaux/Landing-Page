import React from 'react';
import "./PageIntro.css";
import TechGif from "../../images/procgreen.gif"
import ProfilePic from "../../images/Profilepic.jpeg"
import { faGithub, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BodyNav from "../BodyNav/BodyNav"

export default function PageIntro() {
    return (
        <div className="profile-container">
            <div className="background-image">
                <img src={TechGif} alt="Procedural green" />
            </div>
            <div className="profile-content">
                <div className="profile-header">
                    <img src={ProfilePic} alt="Profile" className="profile-image" />
                    <div className="profile-details">
                        <h1>Didier Bidaux <span>🌟</span></h1>
                        <p>📅 Started Mar 2021</p>
                        <p>Let's get started on a new project is my motto! 👨🏽‍💻</p>
                        <p className="job-title">Full-Stack Developer. Biologist. Weird mix, I know... but here I am.</p>

                    </div>
                    <a className="follow-a" href='https://x.com/dbidaux7' target='_blank' rel='noopener noreferrer'>
                        Twitter <span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                    </a>
                    <a className="follow-a" href='https://x.com/dbidaux7' target='_blank' rel='noopener noreferrer'>
                        Instagram <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </a>
                </div>
                <div className="profile-footer">
                    <div className="footer-item">
                        <span className="status-icon">✅</span> Available/Looking for job
                    </div>
                    <div className="footer-item">
                        <a href='https://www.linkedin.com/in/didier-bidaux-olivera-7b248312b/' target='_blank' rel="noopener noreferrer">LinkedIn <span><FontAwesomeIcon icon={faLinkedin} /></span></a>
                    </div>
                    <div className="footer-item">
                        <a href='https://github.com/DBidaux' target='_blank' rel="noopener noreferrer">Github <span><FontAwesomeIcon icon={faGithub} /></span></a>
                    </div>
                    <div className="footer-item">
                        <span>🎂 March 19th, 1994</span>
                    </div>

                </div>
            </div>
            <BodyNav></BodyNav>
        </div>
    );
}
