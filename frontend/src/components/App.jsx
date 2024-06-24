import { useState } from "react";
import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import Home from './Home/Home'

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
