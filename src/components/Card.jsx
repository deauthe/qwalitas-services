import React from "react";

const Card = (props) => {
	const service = props.service;
	return (
		<div className="flex-col  items-center flex-wrap justify-between gap-4 rounded-xl shadow-md bg-[url('Image.png')] ">
			<h1 className="text-xl text-highlight font-bold uppercase m-2">
				{service.name}
			</h1>

			<hr className="border-black rounded-full  m-2"></hr>
			<div className="flex-col items-center justify-between">
				<p className="m-2 mx-4 overflow-auto flex-grow text-gray-300 text-lg">
					{service.description}
				</p>
				<div className="relative bottom-0">
					<button
						href="/contact"
						className="text-gray-500 mt-auto border-gray-700 duration-200 border-2 px-2 rounded-xl hover:rounded-lg hover:bg-gray-700 text-bold relative top-0 right-0"
					>
						Contact
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
