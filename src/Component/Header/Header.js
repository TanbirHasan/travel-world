import React from "react";
import logo from "../Img/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img src={logo} alt="" width="90" height="50" className="image" />
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Your Destination"
              aria-label="Search"
            />
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/news">
                  News
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Destination
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/contact">
                  Contact
                </a>
              </li>
              <button className="header-button">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
