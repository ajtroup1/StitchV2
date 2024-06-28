import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Login.css";
import Cookies from 'js-cookie'

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [signupInfo, setSignupInfo] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    profileURL: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/validate-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => {
        response.json().then((data) => {
          if (response.status === 200) {
            Cookies.set('routeUser', loginInfo.username)
            navigate('/profile')
          } else {
            alert(data.error);
          }
        });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="login-main">
      <div className="login-upper">
        <div className="login-img-container">
          <img
            src="https://burst.shopifycdn.com/photos/wrtiting-tools.jpg?width=1000&format=pjpg&exif=0&iptc=0"
            id="login-img"
            alt="Login Image"
          />
        </div>
        <div className="login-form-container">
          <p className="login-text">Log in</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-login">Username / Email</label>
              <input
                type="text"
                className="form-control"
                id="username-login"
                name="username"
                aria-describedby="emailHelp"
                placeholder="Enter here"
                value={loginInfo.username}
                onChange={handleInputChange}
                autoComplete="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-login">Password</label>
              <input
                type="password"
                className="form-control"
                id="password-login"
                name="password"
                placeholder="Password"
                value={loginInfo.password}
                onChange={handleInputChange}
                autoComplete="current-password"
              />
            </div>
            <button type="submit" className="btn btn-primary login-btn">
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
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                autoComplete="new-password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="login-img-container">
          <img
            src="https://media.istockphoto.com/id/863497498/photo/i-need-everyone-to-give-me-their-best-ideas.jpg?s=612x612&w=0&k=20&c=NtuxU9998bWMDsZN8QB0Ox-5AlpQ7NoifOhbuXQWcpo="
            id="login-img"
            alt="Create Account Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
