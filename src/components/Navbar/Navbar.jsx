import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  const handleMode = () => {
    props.handleMode();
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${
        props.mode === "dark" ? "dark" : ""
      } text-${props.mode === "dark" ? "light" : "dark"}`}
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          to="/"
        >
          BookTown
        </Link>
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
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                to="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "dark" ? "Disable Dark Mode" : "Enable Dark Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};
