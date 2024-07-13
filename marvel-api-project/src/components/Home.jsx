import * as React from "react";
import "../styles/main.css";
import Feat from "../hooks/Feat.jsx";

function Home() {
  return (
    <React.Fragment>
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
      </div>
    </React.Fragment>
  );
}

export default Home;
