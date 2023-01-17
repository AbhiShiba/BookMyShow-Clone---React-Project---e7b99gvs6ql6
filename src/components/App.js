import React from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./Home";
import { CheckOut } from "./CheckOut/CheckOut";

function App() {
  return (
    <div id="main">
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/checkout" element={<CheckOut/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
