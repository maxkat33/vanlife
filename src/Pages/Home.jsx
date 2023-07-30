import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Home() {
	return (
		<div className="home-page">
			<Nav />
			<main className="home">
				<h1>You got the travel plans, we got the travel vans.</h1>
				<p>
					Add adventure to your life by joining the #vanlife movement.
					Rent the perfect van to make your perfect road trip.
				</p>
				<button className="home">Find your van</button>
			</main>
			<Footer />
		</div>
	);
}
