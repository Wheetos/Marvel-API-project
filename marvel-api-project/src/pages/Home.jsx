import * as React from "react";
import "../styles/main.css";
import Feat from "../hooks/Feat.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="flexbox">
        <div className="hero-img">
          <div className="hero-text">
          <h1>Welcome to Marvel!</h1>
          <h4>
            Sit back, relax, and take a look at all of the heroes and villians
            here!
          </h4>
          </div>
        </div>
        <div className="container">
        <h3>Featured characters</h3>
        <Feat></Feat>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default Home;
