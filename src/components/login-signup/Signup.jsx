import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef } from "react";

const Signup = () => {
	let nameRef = useRef("").current;
	let passwordRef = useRef("").current;

	const signingUp = () => {
		axios.post("http://localhost:3000/users/signup", {
			name: nameRef,
			password: passwordRef,
		});
	};

	return (
		<>
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

				<Button onClick={signingUp}>Sign up</Button>
			</form>
		</>
	);
};

export default Signup;
