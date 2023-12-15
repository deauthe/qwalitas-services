import React from "react";
import services from "../constants/services";
import Card from "./Card";

const Services = () => {
	return (
		<div className=" text-center">
			<div className="p-4 m-10 flex-row items-center justify-between">
				<div className="text-center font-[650] text-5xl md:text-8xl text-primary ">
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
