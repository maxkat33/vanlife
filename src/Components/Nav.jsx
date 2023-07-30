import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<Link to="/" className="nav--home">
				#VANLIFE
			</Link>
			<div className="nav--pages">
				<Link to="/about">About</Link>
				<Link to="/vans">Vans</Link>
			</div>
		</nav>
	);
}
