import React from "react";
import "../css/TextInfo.css";

const TextInfo = ({ textinfo, passage }) => {
	return (
		<div className="textinfo__container">
			<h1>{textinfo}</h1>
			<div className="passage">
				<p>{passage}</p>
			</div>
		</div>
	);
};

export default TextInfo;
