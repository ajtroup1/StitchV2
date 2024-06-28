import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/App.css";
import Cookies from "js-cookie";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("loggedIn") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const loggedInCookie = Cookies.get("loggedIn");
      setIsLoggedIn(loggedInCookie === "true");
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const logout = () => {
    Cookies.remove("loggedIn");
    Cookies.remove("routeUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  const goToProfile = () => {
    navigate('/profile')
  }

  return (
    <>
      <div className="navbar-main">
        <div className="nav-left">
          <a href="/">Home</a>
          <a href="/browse">Browse</a>
          <a href="/create">Create</a>
        </div>
        <div className="nav-mid">
          <img
            src="../../src/assets/stitch-icon.png"
            id="nav-logo"
            alt="Stitch Logo"
          />
          <p className="nav-title">Stitch</p>
        </div>
        <div className="nav-right">
          {isLoggedIn ? (
            <>
              <a href="#" onClick={logout}>Log out</a>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/29/DS2_by_Future.jpg"
                id="nav-profile-icon"
                alt="Profile Icon"
                onClick={goToProfile}
              />
            </>
          ) : (
            <a href="/login">Log in</a>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
