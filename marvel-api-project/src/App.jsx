import React from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/Marvel-API-project/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Marvel-API-project/Characters" element={<Characters />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
