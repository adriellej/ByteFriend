import "../index.css";
import "../css/aboutUs.css";

// Import images
import Team_Image from "../img/team.png";
import Avatar_1 from "../img/avatar1.png";
import Avatar_2 from "../img/avatar2.png";
import Avatar_3 from "../img/avatar3.png";
import Avatar_4 from "../img/avatar4.png";

const AboutUs = () => {
	return (
		<div className="about_container">
			<div className="header_container"> 
				<div className="column_1">
					<h1>About Us.</h1>

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna 
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
						ullamco laboris nisi ut aliquip ex ea commodo consequat. 
						Duis aute irure dolor in reprehenderit in voluptate velit 
						esse cillum dolore eu fugiat nulla pariatur. 
					</p>

				</div>

				<div className="column_2">
					<img src={Team_Image} alt="team_image" />
				</div>
				
			</div>

			<div className="origin_name">
				<div>
					<h2>byte</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>

				<span>
					<h2>+</h2>
				</span>

				<div>
					<h2>friend</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
					</p>
				</div>
			</div>


			<div className="skills_container">
				<div className="skills_description">
					<h2>Diverse Skill Set Ideal For a Variety of Projects</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nam ornare, libero vitae bibendum ornare, sem ipsum euismod justo.createRoot
					</p>
				</div>

				<div className="skills_list">
					<div className="skill_specific">
						<h3>React</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
					</div>

					<div className="skill_specific">
						<h3>Node.js</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
					</div>

					<div className="skill_specific">
						<h3>Javascript</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
					</div>

					<div className="skill_specific">
						<h3>Content Writing</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
					</div>

					<div className="skill_specific">
						<h3>Visual Graphic Design</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.</p>
					</div>
				</div>
			</div>

		</div>
	);
}

export default AboutUs;