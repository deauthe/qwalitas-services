import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="flex-col min-h-screen bg-black ">
			<NavBar />
			<hr className="mx-9 bg-primary rounded-3xl  "></hr>
			<div className=" bg-black min-h-screen p-8 ">
				<div className="my-9">
					<Hero />
				</div>
				<hr className="m-9 bg-primary border-primary  "></hr>
				<Services />
				<hr className="m-9 border-1 border-black" />
				<About />
				<hr className="m-9 border-black " />
				<Contact />
				<hr className="mt-9 mx-9 bg-primary rounded-3xl  "></hr>
				<Footer />
			</div>
		</div>
	);
}

export default App;
