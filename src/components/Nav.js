import React from "react";
import "../main.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md p-4">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-auto" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="pl-5 active">
              <a
                href="#"
                className="nav-link"
                id="home"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                About
              </a>
            </li>

            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Education
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Skills
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Projects
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
