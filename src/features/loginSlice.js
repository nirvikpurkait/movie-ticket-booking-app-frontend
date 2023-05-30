import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: null,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action) => {
			state.token = action.payload;
		},
		logout: (state) => {
			state.token = null;
		},
	},
});

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions;
