// import React from 'react';
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

// const options = {
//   burgerColor: "#eb4034",
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax",
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

// const Header = () => {
//   return <ReactNavbar {...options} />;
// };

// export default Header;



import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AccountBoxRounded from "@material-ui/icons/AccountBoxRounded";
import Search from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css";

function Header() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<a href="/"><img src={logo} alt="" /></a>
			<nav ref={navRef}>
				<NavLink to ="/" onClick={showNavbar}>Home</NavLink>
				<NavLink to ="/products" onClick={showNavbar}>Products</NavLink>
				<NavLink to ="/contact" onClick={showNavbar}>Contact</NavLink>
				<NavLink to ="/about" onClick={showNavbar}>About</NavLink>
				<NavLink to ="/search" onClick={showNavbar}><Search /></NavLink>
				<NavLink to ="/cart" onClick={showNavbar}><ShoppingCartIcon /></NavLink>
				<NavLink to ="/login" onClick={showNavbar}><AccountBoxRounded /></NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;
              