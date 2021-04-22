import React from "react";
import "../css/Body.css";
import TextInfo from "./TextInfo";
import icons from "./icons";

const Body = ({
	className,
	squaretype,
	headingicon,
	iconnumber,
	textinfo,
	passage,
}) => {
	return (
		<div className="body__container">
			<div className={squaretype}>
				<div className="timeline__square"></div>
				<div className="timeline__square__point"></div>
				{squaretype === "decorative__square" ? (
					<div
						className="timeline__square__point"
						style={{ top: "250px" }}
					></div>
				) : null}
			</div>
			<img src={headingicon} alt="" className={iconnumber} />
			<div className="timeline_column">
				<div className="dates">
					<div style={{ paddingBottom: 25 }}>2006</div> <div>2019</div>
				</div>
			</div>
			<div className="text__info">
				<TextInfo textinfo={textinfo} passage={passage} />
			</div>
		</div>
	);
};

export default Body;
