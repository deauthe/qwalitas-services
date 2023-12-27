import React from "react";
import navBarLinks from "../constants/navLinks";
import socialLinks from "../constants/socialLinks";

import { PiDetectiveFill } from "react-icons/pi";
const Footer = () => {
	return (
		<div className="bg-[url('bgImg.jpg')] border-t-4 md:border-4 border-zinc-900 mt-20 rounded-md md:m-10">
			<div className=" p-10 flex items-center justify-between ">
				<div className="flex-col">
					{navBarLinks.map((item, index) => (
						<div
							key={index}
							className=" flex justify-between hover:font-extrabold text-white hover:bg-primary hover:text-gray-800 duration-200 rounded-2xl shadow-lg hover:rounded-md py-2 pr-2 hover:cursor-pointer"
						>
							<a key={index} href={item.href} className="ml-2 text-left">
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
					<div className=" text-center hover:font-extrabold text-white p-2 hover:cursor-pointer">
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
			{/* <hr className="mb-5 border-zinc-800 rounded-3xl  "></hr>
			<div className="  hover:font-extrabold text-white duration-300 shadow-lg p-2">
				copyright@2023
			</div> */}
		</div>
	);
};

export default Footer;
