import './App.css';
import React from 'react';

const projects = [
	{
		title: 'SoulSupport',
		image:
			'https://soulsupport.vercel.app/_next/image?url=%2FLogo.gif&w=96&q=75',
		link: 'https://soulsupport.vercel.app/',
	},
	{
		title: 'Wrekify',
		image:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4oIs097RyIe3nNKCMld9kxPpvU51sNZMJA&usqp=CAU',
		link: 'https://wrekify.vercel.app/',
	},
];

const App = () => {
	return (
		<div className="landing-page">
			<h1>🚧 Under Construction 🚧</h1>
			<p>But here's some of my work:</p>
			<div className="projects">
				{projects.map((project, index) => (
					<a
						key={index}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer">
						<div className="project">
							<img
								src={project.image}
								alt={project.title}
							/>
							<p>{project.title}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default App;
