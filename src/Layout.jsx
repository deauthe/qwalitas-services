import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<div className="min-h-screen bg-black overflow-hidden">
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
