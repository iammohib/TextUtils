import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      {/* adding bootstarp component */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand mx-3" href="#">
            <strong>{props.title}</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navnavbarautocompletebarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li> */}
            </ul>
            <div
              className={`custom-control custom-switch mx-2 text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />
              <label
                className="custom-control-label"
                htmlFor="customSwitch1"
                onClick={props.toggleMode}
              >
                {props.mode === "light" ? "Dark" : "Light"} Mode
              </label>
            </div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autoComplete="off"
                    onClick={props.toggleLightMode}
                    defaultChecked
                  />
                  Light
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autoComplete="off"
                    onClick={props.toggleDarkMode}
                  />
                  Dark
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    autoComplete="off"
                    onClick={props.toggleGreenMode}
                  />
                  Green
                </label>
                <label className="btn btn-secondary">
                  <input
                    type="radio"
                    name="options"
                    id="option3"
                    autoComplete="off"
                    onClick={props.togglePinkMode}
                  />
                  Red
                </label>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Typechecking With PropTypes:

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

// Setting Default Props:

Navbar.defaultProps = {
  title: "title-here",
  about: "about-here",
};
