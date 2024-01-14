import React from "react";

function Die({ value }) {
	return (
		<div className="die-face">
			<h2 className="die-num">{value}</h2>
		</div>
	);
}

export default Die;
