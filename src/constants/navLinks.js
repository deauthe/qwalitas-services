import { FaHome } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";

const navLinks = [
	{
		name: "Home",
		href: "/",
		icon: <FaHome />,
	},
	{
		name: "About",
		href: "about",
		icon: <IoMdInformationCircleOutline />,
	},
	{
		name: "Contact",
		href: "contact",
		icon: <FaPhoneSquareAlt />,
	},
];

export default navLinks;
