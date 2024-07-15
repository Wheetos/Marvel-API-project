import "../styles/header.css";
import logo from "../assets/marvel-logo.png";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <img src={logo} className="header-logo" />
        <nav>
          <ul>
            <li>
              <Link to="/Marvel-API-project/Characters">Characters</Link>
            </li>
            <li>
              <Link to="/Marvel-API-project/Characters">Events</Link>
            </li>
            <li>
              <Link to="/Marvel-API-project/Characters">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
