import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
			<NavLink to={`/`}>Home</NavLink>
			<NavLink to={`/about`}>About</NavLink>
			<NavLink to={`/booking`}>Book ticket</NavLink>
		</nav>
	);
};

export default Navbar;
