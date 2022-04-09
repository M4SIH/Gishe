import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./Navbar.css";

const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

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
            <div className="leftLinks">
              <button className="btn btn-success" onClick={props.onShowCart}>
                <span className="badge bg-secondary">{numberOfCartItems}</span>
                <i className="bi bi-cart4"></i>
                Cart
              </button>
              {!props.isLoggedIn && (
                <Link to="/loginform" className="nav-link ">
                  Login
                </Link>
              )}
              {props.isLoggedIn && (
                <React.Fragment>
                  <label className="username">
                    {props.userInformation.username}
                  </label>
                  <button
                    onClick={props.onLogout}
                    className="btn btn-secondary"
                  >
                    <i className="bi bi-box-arrow-right "></i>
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
