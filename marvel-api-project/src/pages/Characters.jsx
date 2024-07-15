import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Characters() {
  return (
    <React.Fragment>
      <Header />
      <nav className="flexbox">
      <p>Hello!</p>
      <Footer />
      </nav>
    </React.Fragment>
  );
}

export default Characters;
