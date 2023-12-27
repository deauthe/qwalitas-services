import React from "react";

const Card = (props) => {
	const service = props.service;
	return (
		<div
			className="flex-col border-zinc-900 border-[1px] items-center flex-wrap justify-between gap-4 rounded-xl shadow-md bg-[url('Image.png')] "
			id={service.href}
		>
			<h1 className="text-xl text-highlight font-bold uppercase m-2">
				{service.name}
			</h1>

			<hr className="border-black rounded-full  m-2"></hr>
			<div className="flex-col items-center justify-between">
				<p className="m-2 mx-4 overflow-auto  text-gray-300 text-lg">
					{service.description}
				</p>
			</div>

			<div className="relative mt-auto bottom-0">
				{/* <button
					href="/contact"
					className="text-gray-500 mt-auto mx-2 border-gray-700 duration-200 border-2 px-2 rounded-xl hover:rounded-lg hover:bg-gray-700 text-bold relative top-0 right-0"
				>
					Contact
				</button> */}
			</div>
		</div>
	);
};

export default Card;
