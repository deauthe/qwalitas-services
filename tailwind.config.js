/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				gradient1: "linear-gradient(to left, #434343 -100%, black 100%)",
				gradient2: "linear-gradient(0deg, #000000 94%, #3b0086 100%)",
			},
			fontFamily: {
				custom: ["oswald", "sans-serif"],
			},
			colors: {
				backg1: "#000000",
				primary: "#F5A141",
				secondary: "#D95798",
				accent: "#C6653B",
				highlight: "#2F907D",
			},
		},
	},
	plugins: [],
};
