import React from "react";
import { FaBehance, FaFacebook, FaTwitter, FaSearch } from "react-icons/fa";
import AccountBoxRounded from "@material-ui/icons/AccountBoxRounded";
import Search from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const links = [
  {
    id: 1,
    url: "/",
    text: "home"
  },
  {
    id: 2,
    url: "/products",
    text: "products"
  },
  {
    id: 3,
    url: "/contact",
    text: "contact"
  },
  {
    id: 4,
    url: "/about",
    text: "about"
  },
  {
    id: 5,
    url: "/search",
    text: <Search />
  },
  {
    id: 6,
    url: "/cart",
    text: <ShoppingCartIcon />
  },
  {
    id: 7,
    url: "/login",
    text: <AccountBoxRounded />
  },
];

export const social = [
  {
    id: 1,
    url: "/login",
    icon: <AccountBoxRounded />
  },
  {
    id: 2,
    url: "/search",
    icon: <Search />
  },

];
