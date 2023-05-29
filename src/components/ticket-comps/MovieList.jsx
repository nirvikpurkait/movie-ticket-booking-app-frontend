import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const navigate = useNavigate();
	const location = useLocation();

	const navigateToMovieDetails = (movieName) => {
		const locationToNavigate = `${location.pathname}/${movieName
			.split(" ")
			.join("-")
			.toLowerCase()}`;
		navigate(locationToNavigate);
	};

	useEffect(() => {
		// sample promise for backend data
		const samplePromise = (value) => {
			return new Promise((res, rej) => {
				if (value) {
					res([
						{
							name: `Avengers`,
						},
						{
							name: `Mission Impossible`,
						},
						{
							name: `Jhon Wick`,
						},
						{
							name: `Transformrrs`,
						},
					]);
				} else rej([]);
			});
		};

		samplePromise(true).then((res) => setMovies(res));
	}, []);

	return (
		<>
			<p>This is also accesible by anyone</p>
			{movies.map((elem) => (
				<button
					key={elem.name}
					onClick={(e) => navigateToMovieDetails(elem.name)}
				>
					{elem.name}
				</button>
			))}
		</>
	);
};

export default MovieList;
