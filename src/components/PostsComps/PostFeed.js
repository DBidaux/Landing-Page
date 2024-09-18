import React from 'react';
import "./PostFeed.css";
import ProfilePic from "../../images/Profilepic.jpeg";
import Post1 from "../../images/Post1-1.jpeg";
import Post2 from "../../images/Post2.png";
import Post3 from "../../images/Post3.png";
import Post4 from "../../images/Post4.jpeg";

export default function PostFeed() {
	return (
		<div>
			{/* POST 1 */}
			<div className="post-container">
				<div className="post-header">
					<img src={ProfilePic} alt="Profile" className="post-profile-image" />
					<div className="post-user-info">
						<div className="post-user">
							<span className="post-username">Didier Bidaux 🌟</span>
							<span className="post-date">• 2 Nov 2021</span>
						</div>
						<div className="post-status">
							<span className="post-status-icon">🤩</span> Feelin' inspired
						</div>
					</div>
				</div>
				<div className="post-body">
					<h2 className="post-title">Hello World!</h2>
					<p className="post-text">
						This is my website where I post about what I do and the things I program. You can follow me on social media by clicking the buttons (X, IG or Github) above. Or you can contact me by writing an email to <span className="post-mail">bidaux3@hotmail.es</span>.
						I look forward to hearing from you! 
					</p>
					<img src={Post1} alt="Post content" className="post-image" />
				</div>
				<div className="post-footer">
					<span className="post-emoji">Inside the museums, Infinity goes up on trial (Bob Dylan)</span>
					<span className="post-date">• MOCO Museum, Barcelona</span>
				</div>
			</div>

			{/* POST 4 */}
			<div className="post-container">
				<div className="post-header">
					<img src={ProfilePic} alt="Profile" className="post-profile-image" />
					<div className="post-user-info">
						<div className="post-user">
							<span className="post-username">Didier Bidaux 🌟</span>
							<span className="post-date">• 17 Ago 2024</span>
						</div>
						<div className="post-status">
							<span className="post-status-icon">💻</span> Feelin' fantastic!
						</div>
					</div>
				</div>
				<div className="post-body">
					<h2 className="post-title">Another one!</h2>
					<p className="post-text">
						Any portfolio is not complete without a To-Do app!
						So I decided to get to work on this project, and this app was born, with an attempt to apply a Jira-like style, with Drag&Drop and a nice dark design.
						<br />

						It is deployed on a Raspberry5 VPS, fully dockerized.
						<br />
						You can sign up and try it out, so you can give me feedback!
						<br />

					</p>
					<img src={Post3} alt="Post content" className="post-image" />
				</div>
				<div className="post-footer">
					<span className="post-emoji">There is always one more bug to fix. (Ellen Ullman)</span>
					<span className="post-date">• Málaga, Spain</span>
				</div>
			</div>

			{/* POST 2 */}
			<div className="post-container">
				<div className="post-header">
					<img src={ProfilePic} alt="Profile" className="post-profile-image" />
					<div className="post-user-info">
						<div className="post-user">
							<span className="post-username">Didier Bidaux 🌟</span>
							<span className="post-date">• 18 Dic 2022</span>
						</div>
						<div className="post-status">
							<span className="post-status-icon">⚽</span> Feelin' amazing!
						</div>
					</div>
				</div>
				<div className="post-body">
					<h2 className="post-title">2022 World Cup Champions!</h2>
					<p className="post-text">
						In 2022, I went to Doha (Qatar), and I had the opportunity to see Argentina win the final against France live, defined as the most thrilling final of the last 16 years. I was also very lucky to be able to bring back a piece of the net from the goal where the penalties were taken, thanks to <a href="https://www.instagram.com/lautaromartinez/" target='_blank' rel='noopener noreferrer' className="post-mail">Lautaro Martínez</a>, Inter Milan striker!
					</p>
					<img src={Post4} alt="Post content" className="post-image" />
				</div>
				<div className="post-footer">
					<span className="post-emoji">No player is as good as all of them together (Di Stefano)</span>
					<span className="post-date">• Lusail Stadium, Doha</span>
				</div>
			</div>

			{/* POST 3 */}
			<div className="post-container">
				<div className="post-header">
					<img src={ProfilePic} alt="Profile" className="post-profile-image" />
					<div className="post-user-info">
						<div className="post-user">
							<span className="post-username">Didier Bidaux 🌟</span>
							<span className="post-date">• 17 Jul 2023</span>
						</div>
						<div className="post-status">
							<span className="post-status-icon">💻</span> Feelin' happy!
						</div>
					</div>
				</div>
				<div className="post-body">
					<h2 className="post-title">One of many apps deployed!</h2>
					<p className="post-text">
						I worked on this project and was very happy to be able to deploy it!

						It was a full-stack project that I put special care into, since I made it for my friends.
						I included it in my portfolio, since despite being a personal project, it arose from the need to plan events and purchases in common, since it was becoming quite complicated as the group of friends grew.
						<br />
						<br />
						You can visit it at <a href="https://www.cuadrillagolfes.es/" target='_blank' rel='noopener noreferrer' className="post-mail">Cuadrilla Golfes</a>, and register through the form, or log in with the following credentials:
						<br />
						<ul className="list-style">
							<li>user: tigij22880@carspure.com</li>
							<li>password: 1234tester</li>
						</ul>
					</p>
					<img src={Post2} alt="Post content" className="post-image" />
				</div>
				<div className="post-footer">
					<span className="post-emoji">It's not a bug, it's an undocumented feature. (Anonymous)</span>
					<span className="post-date">• Málaga, Spain</span>
				</div>
			</div>

		</div>

	);
}
