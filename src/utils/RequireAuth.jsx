import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const state = useSelector((store) => store.logging);

	if (state.token == null) {
		return <Navigate to="/login" />;
	}

	return <>{children}</>;
};

export default RequireAuth;
