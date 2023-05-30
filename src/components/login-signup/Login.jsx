import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../features/loginSlice";
import axios from "axios";

const Login = () => {
	const state = useSelector((store) => store.logging);
	const dispatch = useDispatch();
	let nameRef = useRef("").current;
	let passwordRef = useRef("").current;
	const navigate = useNavigate();
	const location = useLocation();

	const redirectLocation = location.state?.redirect || "/";

	const loggingIn = () => {
		axios
			.post("http://localhost:3000/users/login", {
				name: nameRef,
				password: passwordRef,
			})
			.then((res) => {
				console.log(res.data);
				dispatch(login(res.data.token));
				navigate(redirectLocation);
			});
	};

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<div>
				<TextField
					type="text"
					id="name"
					label="Name"
					onChange={(e) => (nameRef = e.target.value)}
				></TextField>
			</div>
			<div>
				<TextField
					type="password"
					id="password"
					label="Password"
					onChange={(e) => (passwordRef = e.target.value)}
				></TextField>
			</div>
			<Button onClick={loggingIn}>Log in</Button>
		</form>
	);
};

export default Login;
