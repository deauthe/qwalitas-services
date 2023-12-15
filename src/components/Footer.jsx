import React from "react";
import navBarLinks from "../constants/navLinks";
import socialLinks from "../constants/socialLinks";
import { PiDetectiveFill } from "react-icons/pi";
const Footer = () => {
	return (
		<div>
			<div className=" p-10 flex items-center justify-between bg-black">
				<div className="flex-col">
					{navBarLinks.map((item, index) => (
						<div
							key={index}
							className=" flex items-center px-2 justify-between hover:font-extrabold text-white hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md p-2 hover:cursor-pointer"
						>
							<a key={index} href={item.href} className="ml-4 text-left">
								{item.name}
							</a>
							<div className="ml-2">{item.icon}</div>
						</div>
					))}
					<div className=" flex items-center justify-between hover:font-extrabold text-white hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md p-2 hover:cursor-pointer">
						<a href="/services" className="mr-4 text-center">
							Services
						</a>
						<div className="ml-2">
							<PiDetectiveFill />
						</div>
					</div>
				</div>
				<div className="flex-col justify-start  p-6">
					<div className=" flex items-center justify-between hover:font-extrabold text-white p-2 hover:cursor-pointer">
						socials
					</div>
					{socialLinks.map((item, index) => (
						<div
							key={index}
							className=" flex items-center justify-between hover:font-extrabold text-white hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md p-2 hover:cursor-pointer"
						>
							<div className="ml-2">{item.icon}</div>
							<a key={index} href={item.href} className="mx-4">
								{item.name}
							</a>
						</div>
					))}
				</div>
			</div>
			<hr className="mb-5 bg-primary rounded-3xl  "></hr>
			<div className="  hover:font-extrabold text-white hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md  p-2">
				copyright@2023
			</div>
		</div>
	);
};

export default Footer;
