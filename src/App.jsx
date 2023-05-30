import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BookTicket from "./components/ticket-comps/BookTicket";
import MovieList from "./components/ticket-comps/MovieList";
import MovieDetails from "./components/ticket-comps/MovieDetails";
import Payment from "./components/ticket-comps/Payment";
import Login from "./components/login-signup/Login";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import RequireAuth from "./utils/RequireAuth";
import Signup from "./components/login-signup/Signup";

function App() {
	const state = useSelector((store) => store.logging);

	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/about" element={<About></About>}></Route>
				<Route path="/booking" element={<BookTicket></BookTicket>}>
					<Route index element={<MovieList></MovieList>}></Route>
					<Route
						path={`:movieName`}
						element={<MovieDetails></MovieDetails>}
					></Route>
					<Route
						path={`:movieName/payment`}
						element={<Payment></Payment>}
					></Route>
				</Route>
				<Route path="/login" element={<Login></Login>}></Route>
				<Route path="/signup" element={<Signup></Signup>}></Route>
				<Route
					path="/profile"
					element={
						<RequireAuth>
							<Profile></Profile>
						</RequireAuth>
					}
				></Route>
			</Routes>
		</>
	);
}

export default App;
