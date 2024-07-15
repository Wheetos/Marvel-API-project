import * as React from "react";
import "../styles/main.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <React.Fragment>
      <Header />
      <nav className="flexbox">
      <p>404 NOT FOUND</p>
      <Footer />
      </nav>
    </React.Fragment>
  );
}

export default NotFound;
