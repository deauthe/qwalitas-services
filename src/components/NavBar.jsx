"use client";
import React, { useState } from "react";
import services from "../constants/services";
import navBarLinks from "../constants/navLinks";
import { IoMdMenu } from "react-icons/io";
import { PiDetectiveFill } from "react-icons/pi";

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
		<nav className=" bg-[url('bgImg3.jpg')] h-[120px] md:h-[170px] rounded-xl border-zinc-900 border-b-2 md:border-2 md:m-10">
			<div className="flex md:flex-row w-screen justify-around items-center">
				<div className="text-gray-500 font-bold text-lg mr-10">
					<img
						src="/logo.png"
						alt="qwalitas services"
						className="h-[150px] md:h-[200px] "
					/>
				</div>

				{/* Navbar links */}
				<div className=" hidden md:flex space-x-10">
					{navBarLinks.map((item, index) => (
						<div
							key={index}
							className=" flex items-center px-2 justify-between hover:font-bold text-gray-500 hover:bg-zinc-900 hover:text-gray-100 duration-200 rounded-2xl shadow-lg hover:rounded-md p-2 hover:cursor-pointer"
						>
							<a
								key={index}
								href={item.href}
								className="  text-lg uppercase text-left"
							>
								{item.name}
							</a>
							<div className="ml-2">{item.icon}</div>
						</div>
					))}

					{/* Dropdown */}
					<div className="relative inline-block text-gray-500">
						<button
							className="rounded-2xl flex items-center justify-between gap-2  text-lg uppercase text-left  hover:font-extrabold text-gray-500 hover:bg-zinc-900 hover:text-gray-100 mr-4 duration-200 shadow-lg hover:rounded-md  p-2"
							onClick={handleDropDown}
						>
							services
							<PiDetectiveFill />
						</button>
						{isDropDownOpen && (
							<div className="absolute bg-black rounded-xl  border-3 text-gray-500 pt-1">
								<ul className="">
									{services.map((item, index) => (
										<li key={index}>
											<a
												href={item.href}
												className="hover:bg-zinc-900 duration-200 hover:text-gray-100 rounded-b-3xl py-2 px-4 block whitespace-no-wrap"
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
						className="m-8 h-auto scale-150 md:scale-150 text-gray-500"
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
							className="  hover:font-extrabold text-gray-500 hover:bg-zinc-900 hover:text-gray-100 duration-200 rounded-2xl shadow-lg hover:rounded-md  p-2"
						>
							<a href={item.href}>{item.name}</a>
						</div>
					))}

					{/* Dropdown */}
					<div className="relative inline-block text-gray-500">
						<a href="/services">
							<button
								className="hover:font-extrabold text-gray-500 hover:bg-zinc-900 hover:text-gray-100 duration-200 rounded-2xl shadow-lg hover:rounded-md  p-2"
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
