import { useState } from "react";
import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Home from "./Home/Home";
import Browse from "./Browse/Browse";
import Create from "./Create/Create"
import Login from "./Login/Login";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
