import React from "react";
import { useState } from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-xl navbar-${props.mode}  p-4 bg-${props.mode}`}
      >
        <div className="container-fluid    ">
          <a className="navbar-brand fw-bolder text-white" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active  text-white"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "blue" ? "dark" : "white"
                }`}
                for="flexSwitchCheckChecked"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
