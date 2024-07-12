import * as React from "react";
import "../styles/main.css";

function Home() {
  return (
    <React.Fragment>
      <div className="hero-container">
      <div className="wrapper-img">
        <div className="wrapper-header">
          <h1>Welcome to Marvel!</h1>
          <h4>
            Sit back, relax, and take a look at all of the heroes and villians
            here!
          </h4>
        </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-featured">
          <h3>Featured characters</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
