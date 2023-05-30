import React from "react";
import { logout } from "../features/loginSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const navigate = useNavigate();

	const loggingOut = () => {
		navigate("/");
	};

	return (
		<>
			<p>this is profile</p>
			<Button onClick={loggingOut}>Log out</Button>
		</>
	);
};

export default Profile;
