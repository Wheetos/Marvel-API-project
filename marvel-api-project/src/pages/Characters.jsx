import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Characters() {
  return (
    <React.Fragment>
      <Header />
      <nav className="flexbox">
        <h1>Character List</h1>
        <Outlet />
        <Footer />
      </nav>
    </React.Fragment>
  );
}

export default Characters;
