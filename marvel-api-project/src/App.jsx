import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Fetch from "./hooks/Fetch";

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
