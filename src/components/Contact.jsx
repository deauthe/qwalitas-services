import React from "react";
import contacts from "../constants/contact";

const Contact = () => {
	return (
		<div className="mt-20 sm:mx-96 sm:p-40 border-4  border-zinc-900 rounded-2xl bg-[url('bgImg.jpg')] ">
			<div className="text-2xl text-center md:text-5xl md:mx-10 m-4 whitespace-pre-line text-gray-300 font-extrabold ">
				CONTACT
			</div>

			<div className=" p-10 flex flex-col items-center justify-between md:flex-row">
				<div className="text-gray-200 text-center uppercase pb-10">
					<p className="sm:mb-10">You can reach us at:{"\n\n"}</p>
					<a href={`tel:${contacts.phone.value}`}>
						<div className="border-2 border-zinc-900 px-10 hover:font-extrabold text-gray-200 hover:bg-slate-800 duration-200 rounded-lg shadow-lg hover:rounded-md p-2 hover:cursor-pointer">
							<div className="flex flex-row items-center justify-between">
								<div className="px-2">{contacts.phone.icon}</div>
								<div className="px-2">{contacts.phone.value}</div>
							</div>
						</div>
					</a>
				</div>
				<div className="text-gray-200 text-center uppercase pb-10">
					<p className="sm:mb-10">You can email us at: </p>
					<a href={`mailto:${contacts.email.value}`}>
						<div className="border-2 border-zinc-900 px-10 hover:font-extrabold text-gray-200 hover:bg-slate-800 duration-200 rounded-lg shadow-lg hover:rounded-md p-2 hover:cursor-pointer">
							<div className="flex flex-row items-center justify-between">
								<div className="px-2">{contacts.email.icon}</div>
								<div className="px-2">{contacts.email.value}</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
