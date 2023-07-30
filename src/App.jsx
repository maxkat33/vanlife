import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans";
import "./server";

// I need to update the buttons to be <Link> elements
// Update all of my css...

const App = () => {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/vans" element={<Vans />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
