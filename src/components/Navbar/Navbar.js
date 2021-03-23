import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

import "./Navbar.css";
// rafce
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_izquierda">
        <MenuIcon />
        <Link to="/">
          <img
            className="navbar_logo"
            src="http://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar_input">
        <input type="text" />
        <SearchIcon className="navbar_buscador" />
      </div>
      <div className="navbar_iconos">
        <VideoCallIcon className="icono" />
        <AppsIcon className="icono" />
        <NotificationsIcon className="icono" />
        <AccountCircleIcon className="icono" />
      </div>
    </div>
  );
};

export default Navbar;
