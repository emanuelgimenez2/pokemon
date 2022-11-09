import React from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./componentes/home";
import Detail from "./componentes/detail";
import Create from "./componentes/create";
import LandingPage from "./componentes/landingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<Detail />}></Route>
        <Route exact path="/home/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
