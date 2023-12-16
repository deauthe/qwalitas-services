import React from "react";

const Hero = () => {
	return (
		<div className="flex-col sm:flex-row  ">
			<div className="">
				<div className="">
					<h1 className="font-custom uppercase text-center text-5xl md:text-8xl text-primary font-extrabold m-8">
						Securing Truth
					</h1>
				</div>
				<div className="mx-0 md:mx-20">
					<h2 className="text-3xl uppercase md:text-5xl text-center md:text-center text-accent font-mono font-extrabold mt-8">
						Empowering You with Answers
					</h2>
					<h2 className="text-3xl uppercase  md:text-5xl text-center md:text-center text-accent font-mono font-extrabold mb-8">
						One Clue at a Time
					</h2>
				</div>
				<div className="">
					<h3 className="text-xl uppercase md:text-3xl text-gray-600 text-center font-mono font-extrabold">
						Contact Us Today
					</h3>
					<h3 className="text-xl uppercase md:text-3xl text-gray-600 text-center font-mono font-extrabold">
						for Professional and Confidential Investigations
					</h3>
				</div>
			</div>
			<div className="">
				<img
					src="detective.png"
					alt=""
					className="items-center justify-center mx-auto"
				></img>
			</div>
		</div>
	);
};

export default Hero;
