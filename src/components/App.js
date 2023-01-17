import React from "react";
import "../styles/App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./Home";

function App() {
  return (
    <div id="main">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
