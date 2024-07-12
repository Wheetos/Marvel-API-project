import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Fetch from "../hooks/Fetch";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Home></Home>
      <Fetch></Fetch>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
