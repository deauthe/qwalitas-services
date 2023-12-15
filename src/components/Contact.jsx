import React from "react";
import contacts from "../constants/contact";

const Contact = () => {
	return (
		<div className="mt-20 border-4  border-zinc-900 rounded-2xl bg-[url('bgImg.jpg')] ">
			<div className="text-2xl text-center md:text-5xl md:mx-10 m-4 whitespace-pre-line text-gray-300 font-extrabold ">
				CONTACT
			</div>

			<div className=" p-10 flex items-center justify-between">
				<div className="text-gray-200 text-center">
					<p>You can reach us at:{"\n\n"}</p>
					<a href={`tel:${contacts.phone.value}`}>
						<div className="border-2 border-zinc-900 px-20 w-auto  hover:font-extrabold text-gray-200 hover:bg-slate-800  duration-200 rounded-lg shadow-lg hover:rounded-md p-2 hover:cursor-pointer">
							<p>{contacts.phone.value}.</p>
						</div>
					</a>
				</div>
				<div className="text-gray-200 text-center">
					<p>You can email us at: </p>
					<a href={`mailto:${contacts.email.value}`}>
						<div className="border-2 border-zinc-900 px-20 hover:font-extrabold text-gray-200 hover:bg-slate-800 duration-200 rounded-lg shadow-lg hover:rounded-md p-2 hover:cursor-pointer">
							<div className="flex flex-row items-center">
								<div className="w-1/4">{contacts.email.icon}</div>
								<div className="w-3/4">{contacts.email.value}</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
