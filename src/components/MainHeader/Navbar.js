import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          CinemaTicket
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/movies"
              className="nav-link rightLinks"
              aria-current="page"
            >
              Movies
            </Link>
            <Link
              to="/theaters"
              className="nav-link rightLinks"
              aria-current="page"
            >
              Theaters
            </Link>
            {!props.isLoggedIn && (
              <Link to="/loginform" className="nav-link leftLinks">
                Login
              </Link>
            )}
            {props.isLoggedIn && (
              <div className="leftLinks">
                <label className="username">
                  {props.userInformation.username}
                </label>
                <button onClick={props.onLogout} className="btn btn-secondary">
                  <i className="bi bi-box-arrow-right "></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
