import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const state = useSelector((store) => store.logging);

	return (
		<nav style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
			<NavLink to={`/`}>Home</NavLink>
			<NavLink to={`/about`}>About</NavLink>
			<NavLink to={`/booking`}>Book ticket</NavLink>
			{!state.token && <NavLink to={`/login`}>Login</NavLink>}
			{state.token && <NavLink to={`/profile`}>Profile</NavLink>}
		</nav>
	);
};

export default Navbar;
