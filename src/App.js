import React from "react";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./Component/MainNavbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;