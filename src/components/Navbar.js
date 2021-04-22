import React from "react";
import "../css/Navbar.css";
import icons from "./icons";

function Navbar() {
	var handleClick = (value) => {
		console.log(value);
		switch (value) {
			case "github":
				window.open("https://github.com/b00000001");
			case "linkedin":
				window.open("https://www.linkedin.com/in/aaron-deas-ba9908166/");
		}
	};
	return (
		<div className="navbar">
			<div className="nav__left"></div>
			<div className="nav__right">
				<div className="info">
					<div className="name">
						Aaron <strong>Deas</strong>
					</div>
					<div className="title" style={{ fontSize: "25px", bottom: "5px" }}>
						<p>Front End Developer</p>
					</div>

					<div className="contact__details">
						<div>
							<strong>
								<img src={icons.emailicon} alt="" className="emailicon" />
							</strong>
							deas.aaron@gmail.com
						</div>
						<div>
							<strong>ph:</strong>704.860.3962
						</div>
					</div>
				</div>
			</div>
			<div className="socialicons">
				<img
					src={icons.github}
					alt=""
					className="github"
					style={{ paddingRight: "20px" }}
					onClick={() => handleClick("github")}
				/>

				<img
					src={icons.linkedin}
					alt=""
					className="linkedin"
					onClick={() => handleClick("linkedin")}
				/>
			</div>
		</div>
	);
}

export default Navbar;
