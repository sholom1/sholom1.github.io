import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<div className="container">
			<div className="rightContainer">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/contact">
					Contact
				</Link>
				<Link className="link" to="/projects">
					Projects
				</Link>
				<Link className="link" to="/projects/XavianHathor">
					Xavian {'&'} Hathor
				</Link>
				<Link className="link" to="/projects/ElectionMapbox">
					Election Mapbox Local Demo
				</Link>
			</div>
			<div className="leftContainer"></div>
		</div>
	);
}
export default Navbar;
