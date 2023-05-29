import React, { useContext, useEffect, useRef, useState } from "react";
import SeatingArrangement from "./SeatingArrangement";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectedSeatsContext } from "./BookTicket";

const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const { selectedSeats, changeSelectedSeats } =
		useContext(SelectedSeatsContext);
	const userSelectedSeats = useRef(selectedSeats).current;

	console.log(selectedSeats);

	const handleClick = () => {
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

					<Button onClick={handleClick}>Proceed to payment</Button>
				</>
			)}
		</>
	);
};

export default MovieDetails;
