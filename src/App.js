import React, { useState } from "react";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";

function App() {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgba(45, 49, 53, 1)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} handleMode={handleMode} />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/cart" element={<Cart mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
