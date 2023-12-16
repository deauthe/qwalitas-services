import React from "react";

const About = () => {
	return (
		<div className="m-4 md:m-20 mt-20">
			<h1 className="text-5xl font-extrabold md:text-9xl md:mx-10 m-4 whitespace-pre-line text-center text-gray-300 text-extrabold ">
				ABOUT US
			</h1>
			<div className="rounded-xl border-2 border-zinc-900 bg-[url('bgImg3.jpg')]">
				<p className=" mt-20 text-gray-500 font-bold text-lg text-center md:mx-40 m-4 ">
					Welcome to Qwalitas Detective Services, where a team of seasoned
					investigators is committed to unveiling the truth. With decades of
					experience in solving complex cases, we specialize in discreet and
					thorough investigations tailored to your unique needs.
				</p>
				<h1 className="mt-8 font-[600] text-2xl md:text-5xl md:mx-10 m-4 whitespace-pre-line text-center text-accent text-extrabold">
					OUR MISSION
				</h1>
				<p className="mb-20 text-gray-500 font-bold text-lg text-center md:mx-40 m-4 ">
					At Qwalitas Detective Services, our mission is to provide unrivaled
					investigative services with the utmost integrity and confidentiality.
					Whether you're dealing with personal concerns, legal matters, or
					corporate issues, we're here to uncover the facts and bring clarity to
					your situation.
				</p>
			</div>
		</div>
	);
};

export default About;
