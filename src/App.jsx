import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className=" min-h-screen bg-black overflow-hidden ">
			<NavBar />

			<div className=" bg-black min-h-screen p-2 ">
				<div className="my-9">
					<Hero />
				</div>

				<Services />

				<About />

				<Contact />

				<Footer />
			</div>
		</div>
	);
}

export default App;
