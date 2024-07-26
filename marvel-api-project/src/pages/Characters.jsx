import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Fetch from "../hooks/Fetch";

function Characters() {
  return (
    <React.Fragment>
      <Header />
      <div>
        <h1>Character List</h1>
        <Fetch />
      </div>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default Characters;
