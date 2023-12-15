import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex-col min-h-screen bg-zinc-900 overflow-hidden ">
			<NavBar />
			<hr className="mx-9 border-zinc-900 "></hr>
			<div className=" bg-black min-h-screen p-8 ">
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
