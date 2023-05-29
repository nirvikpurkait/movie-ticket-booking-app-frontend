import React, { createContext, useReducer } from "react";
import { Outlet } from "react-router-dom";

const initialSelectedSeats = [];
const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE":
			return action.payload;
		default:
			return state;
	}
};
export const SelectedSeatsContext = createContext();

const BookTicket = () => {
	const [selectedSeats, dispatch] = useReducer(reducer, initialSelectedSeats);

	const changeSelectedSeats = (payload) => {
		dispatch({ type: "CHANGE", payload });
	};

	return (
		<SelectedSeatsContext.Provider
			value={{ selectedSeats, changeSelectedSeats }}
		>
			<Outlet></Outlet>
		</SelectedSeatsContext.Provider>
	);
};

export default BookTicket;
