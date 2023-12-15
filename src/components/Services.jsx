import React from "react";
import services from "../constants/services";
import Card from "./Card";

const Services = () => {
	return (
		<div className=" text-center ">
			<div className="sm:p-4 sm:m-10 w-full flex-row items-center  justify-between">
				<div className="text-5xl md:text-9xl md:mx-10 mx-4 whitespace-pre-line text-center text-gray-300 font-extrabold ">
					SERVICES
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{services.map((item, index) => (
					<Card service={item} key={index} />
				))}
			</div>
		</div>
	);
};

export default Services;
