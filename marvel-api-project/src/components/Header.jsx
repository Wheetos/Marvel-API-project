import "../styles/header.css";
import logo from "../assets/marvel-logo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/Marvel-API-project/">
          <img src={logo} className="header-logo"></img>
        </Link>
        <nav className="navbar">
          <Link to="/Marvel-API-project/Characters">Characters</Link>
          <Link to="/Marvel-API-project/Events">Events</Link>
          <Link to="/Marvel-API-project/About">About</Link>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
