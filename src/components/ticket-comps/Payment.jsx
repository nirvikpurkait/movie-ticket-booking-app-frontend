import React, { useContext } from "react";
import { SelectedSeatsContext } from "./BookTicket";
import { Button } from "@mui/material";

const Payment = () => {
	const { selectedSeats } = useContext(SelectedSeatsContext);

	return (
		<>
			<p>You have selected {selectedSeats.length} seats</p>
			<p>
				Your selected seats are:{" "}
				{selectedSeats.map((elem) => (
					<React.Fragment key={elem}>
						{elem.split(",").join("")}{" "}
					</React.Fragment>
				))}
			</p>
			<Button>Pay by card</Button>
			<Button>Pay online</Button>
		</>
	);
};

export default Payment;
