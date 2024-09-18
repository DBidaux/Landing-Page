import React from 'react';
import "./PostFeed.css";
import SkillsGrid from '../SkillsGrid/SkillsGrid';


export default function PostAbout() {
	return (
		<div className="post-container">
			<div className="">
				<div className="post-user-info">
					<div className="post-user">
						<h1 className="post-username">🌟🌟🌟 Hi, thanks for the visit! 🌟🌟🌟</h1>
					</div>
				</div>
			</div>
			<div className="post-body">
				<h1 className="post-title">Let me introduce myself:</h1>
				<p className="post-text">
					I am Didier Bidaux, a self-taught developer, former biologist and former automotive electronics technician, careers that I put aside to pursue my passion, which are computers, and any kind of technology.
					<br />
					<br />

					I started my programming path at university, thanks to the professor of Computer Science and Statistics, with Python (plotly, matplotlib). When I finished the degree in Biology, and seeing that the job market was turning towards a future dominated by technology, I decided to focus on this path.
					<br />
					<br />
					I'm more oriented towards development than data modeling (that I did at university), but I really enjoy the data processing.
					<br />
					<br />
					I decided to start learning Javascript, for the frontend, since with Python I had the backend covered (Django/Flask). I started with vanilla JS, but quickly moved on to using React, since it is a library that simplifies the development process (currently learning Angular) .
					<br/>
					<br/>
					I have also used Node.JS for the backend, and I usually pivot between the two languages ​​for the backend.
				</p>
				<SkillsGrid/>
			</div>
			<div className="post-body">
				<p className="post-text">
				Reach out and say "Hey!" in any social media. I look forward to hearing from you, so we can talk about projects!
				</p>
				<p>
					I have to say goodbye, the next project is calling me!
				
				</p>
				<p>Didier</p>
			</div>
		</div>
	)
}
