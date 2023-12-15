"use client";
import React, { useState } from "react";
import services from "../constants/services";
import navBarLinks from "../constants/navLinks";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isDropDownOpen, setDropDownOpen] = useState(false);

	const handleDropDown = () => {
		setDropDownOpen(!isDropDownOpen);
	};

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
		console.log(isDropDownOpen);
	};
	return (
		<nav className=" bg-black h-[120px] md:h-[170px] ">
			<div className="flex md:flex-row w-screen justify-between items-center">
				<div className="text-white font-bold text-lg mr-10">
					<img
						src="/logoInv.png"
						alt="qwalitas services"
						className="h-[150px] md:h-[200px] "
					/>
				</div>

				{/* Navbar links */}
				<div className=" hidden md:flex space-x-10">
					{navBarLinks.map((item, index) => (
						<div className=" text-xl   hover:font-extrabold text-primary hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md  p-2">
							<a key={index} href={item.href} className="whitespace-nowrap">
								{item.name}
							</a>
						</div>
					))}

					{/* Dropdown */}
					<div className="relative inline-block text-primary">
						<button
							className="rounded-2xl text-xl  hover:font-extrabold text-primary hover:bg-primary hover:text-gray-800  mx-8 duration-200 shadow-lg hover:rounded-md  p-2"
							onClick={handleDropDown}
						>
							services
						</button>
						{isDropDownOpen && (
							<div className="absolute bg-black rounded-xl  border-3 text-primary pt-1">
								<ul className="">
									{services.map((item, index) => (
										<li key={index}>
											<a
												href={item.href}
												className="hover:bg-primary duration-200 hover:text-gray-800 rounded-b-3xl py-2 px-4 block whitespace-no-wrap"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				{/* Mobile menu button */}
				<div className="md:hidden">
					<button
						className="m-8 h-auto scale-150 md:scale-150 text-white"
						onClick={toggleMenu}
					>
						<IoMdMenu />
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="w-1/4 duration-200 md:hidden bg-black absolute right-0 top-auto flex-col">
					{navBarLinks.map((item, index) => (
						<div
							key={index}
							className="  hover:font-extrabold text-primary hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md  p-2"
						>
							<a href={item.href}>{item.name}</a>
						</div>
					))}

					{/* Dropdown */}
					<div className="relative inline-block text-primary">
						<a href="/services">
							<button
								className="hover:font-extrabold text-primary hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md  p-2"
								onClick={handleDropDown}
							>
								services
							</button>
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
