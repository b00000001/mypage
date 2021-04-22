import React from "react";
import "../css/Header.css";
import Navbar from "./Navbar";
import profilePic from "../Assets/12855768.jpg";

function Header() {
	return (
		<div className="header__container">
			<div className="header__left">
				<div className="profilepic__container">
					<img
						className="profile__pic"
						src={profilePic}
						alt=""
						style={{ borderRadius: "50%" }}
					/>
				</div>
			</div>

			<div className="header__right">
				<Navbar />
			</div>
		</div>
	);
}

export default Header;
