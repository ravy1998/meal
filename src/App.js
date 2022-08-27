import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import Home from "./pages/home/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
