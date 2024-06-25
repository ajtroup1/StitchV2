import { useState } from "react";
import "../../css/Login.css";

function Login() {
  return (
    <div className="login-main">
      <div className="login-upper">
        <div className="login-img-container">
          <img
            src="https://burst.shopifycdn.com/photos/wrtiting-tools.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            id="login-img"
          />
        </div>
        <div className="login-form-container">
          <p>Log in</p>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary login-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div
        className="login-upper"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div className="login-form-container">
          <p>Create an account</p>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="login-img-container">
          <img
            src="https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo="
            id="login-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
