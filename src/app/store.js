import { configureStore } from "@reduxjs/toolkit";
import loginReducers from "../features/loginSlice";

const store = configureStore({
	reducer: {
		logging: loginReducers,
	},
});

export default store;
