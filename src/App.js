import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #191A2C 0%, #131541 48.67%, #191A2C 101.37%)",
      }}
    >
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
