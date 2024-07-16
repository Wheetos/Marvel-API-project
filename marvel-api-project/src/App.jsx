import React from "react";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Splash from "./pages/Splash";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/Marvel-API-project/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Marvel-API-project/Characters">
          <Route index element={<Characters />} />
          <Route path=":id" element={<Splash />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
