import React from "react";

const Hero = () => {
	return (
		<div className="flex-col sm:flex-row border-rose-400 border-2 ">
			<div className="">
				<div className="">
					<h1 className="font-custom uppercase text-center text-8xl text-primary font-extrabold">
						Securing Truth
					</h1>
				</div>
				<div className="">
					<h2 className="text-3xl uppercase md:text-5xl text-center md:text-center text-secondary font-mono font-extrabold">
						Empowering You with Answers
					</h2>
					<h2 className="text-3xl uppercase  md:text-5xl text-center md:text-center text-secondary font-mono font-extrabold">
						One Clue at a Time
					</h2>
				</div>
				<div className="">
					<h3 className="text-xl md:text-3xl text-primary text-center font-mono font-extrabold">
						Contact Us Today for Professional and Confidential Investigations
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
