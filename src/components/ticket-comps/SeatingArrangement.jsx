import React, { useContext } from "react";
import { Table, TableBody, Checkbox } from "@mui/material";
import { SelectedSeatsContext } from "./BookTicket";

// parent for seat table
const SeatingArrangement = ({ row, col, userSelectedSeats }) => {
	// naming the row with letter
	row = [...Array(row).keys()].map((n) => String.fromCharCode(65 + n));
	// naming the column with number
	col = [...Array(col).keys()].map((n) => ++n);

	// event to change the total ref depending on checkbox
	const includeOrRemoveSeatNumber = (rowNo, colNo) => {
		const seatNo = `${rowNo},${colNo}`;

		// if seat is selected push to the array if unselected remove from the array
		if (userSelectedSeats.includes(seatNo)) {
			const seatNoIndex = userSelectedSeats.indexOf(seatNo);
			userSelectedSeats.splice(seatNoIndex, 1);
		} else userSelectedSeats.push(seatNo);
	};

	return (
		<>
			<Table>
				<TableBody>
					{col.map((elem) => (
						<SeatsRow
							key={elem}
							row={row}
							colNo={elem}
							includeOrRemoveSeatNumber={
								includeOrRemoveSeatNumber
							}
						></SeatsRow>
					))}
				</TableBody>
			</Table>
		</>
	);
};

// child for above comp
const SeatsRow = ({ row, colNo, includeOrRemoveSeatNumber }) => {
	const { selectedSeats } = useContext(SelectedSeatsContext);

	return (
		<>
			<tr>
				{row.map((elem) => (
					<td key={elem}>
						<Checkbox
							// check the check box if the box are selectd previously
							defaultChecked={
								selectedSeats.includes(`${elem},${colNo}`)
									? true
									: false
							}
							inputProps={{
								"data-row-no": elem,
								"data-col-no": colNo,
							}}
							onChange={(e) => {
								includeOrRemoveSeatNumber(
									e.target.dataset.rowNo,
									e.target.dataset.colNo
								);
							}}
						></Checkbox>
					</td>
				))}
			</tr>
		</>
	);
};

export default SeatingArrangement;
