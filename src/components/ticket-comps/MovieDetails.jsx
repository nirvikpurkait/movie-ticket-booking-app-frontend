import React, { useContext, useEffect, useRef, useState } from "react";
import SeatingArrangement from "./SeatingArrangement";
import { Button } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { SelectedSeatsContext } from "./BookTicket";
import { useSelector } from "react-redux";

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState(null);
	const { selectedSeats, changeSelectedSeats } =
		useContext(SelectedSeatsContext);
	const userSelectedSeats = useRef(selectedSeats).current;
	const state = useSelector((store) => store.logging);
	const navigate = useNavigate();
	const location = useLocation();

	const proceedToPay = () => {
		if (!state.token) {
			return navigate("/login", {
				state: { redirect: location.pathname },
			});
		}
		changeSelectedSeats(userSelectedSeats);
		const navigateToPayment = `${location.pathname}/payment`;
		navigate(navigateToPayment);
	};

	useEffect(() => {
		// sample promise to get details for the movie
		const samplePromise = (value) => {
			return new Promise((res, rej) => {
				if (value) {
					res({
						row: 10,
						col: 10,
					});
				} else {
					rej(null);
				}
			});
		};

		samplePromise(true).then((res) => {
			setMovieDetails(res);
		});
	}, []);

	return (
		<>
			{movieDetails && (
				<>
					<SeatingArrangement
						row={movieDetails.row}
						col={movieDetails.col}
						userSelectedSeats={userSelectedSeats}
					></SeatingArrangement>

					<Button onClick={proceedToPay}>Proceed to payment</Button>
				</>
			)}
		</>
	);
};

export default MovieDetails;
