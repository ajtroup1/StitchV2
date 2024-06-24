import { useState } from "react";
import "../../css/App.css";

function App() {
  return (
    <>
      <div className="navbar-main">
        <div className="nav-left">
          <a href="/">Home</a>
          <a href="/browse">Browse</a>
          <a href="/create">Create</a>
        </div>
        <div className="nav-mid">
          <img src="../../src/assets/stitch-icon.png" id="nav-logo" />
          <p className="nav-title">Stitch</p>
        </div>
        <div className="nav-right">
          <a href="/login">Log in</a>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/29/DS2_by_Future.jpg"
            id="nav-profile-icon"
          />
        </div>
      </div>
    </>
  );
}

export default App;
