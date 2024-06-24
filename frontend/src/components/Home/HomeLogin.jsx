import { useState } from "react";
import "../../css/App.css";

function HomeLogin() {
  return (
    <div className="login-home-main">
      <div className="login-home-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2554/2554339.png"
          id="login-icon"
        />
        <p className="login-text-description">Have an account? Log in below.</p>
        <button className="btn btn-light login-btn">Log in</button>
      </div>
      <div className="login-home-right">
        <img
          src="https://static.thenounproject.com/png/2197474-200.png"
          id="login-icon"
        />
        <p className="login-text-description">
          Don't have an account? Sign up below.
        </p>
        <button className="btn btn-light login-btn">Sign up</button>
      </div>
    </div>
  );
}

export default HomeLogin;
