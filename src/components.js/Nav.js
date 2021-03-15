import React from "react";
import "../main.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md ">
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
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="pl-5 active">
              <a href="#" style={{ textDecoration: "none", color: "#f9004d" }}>
                Home
              </a>
            </li>
            <li className="pl-5">
              <a href="#" style={{ textDecoration: "none", color: "#f9004d" }}>
                About
              </a>
            </li>
            <li className="pl-5">
              <a href="#" style={{ textDecoration: "none", color: "#f9004d" }}>
                Education
              </a>
            </li>
            <li className="pl-5">
              <a href="#" style={{ textDecoration: "none", color: "#f9004d" }}>
                Skills
              </a>
            </li>
            <li className="pl-5">
              <a href="#" style={{ textDecoration: "none", color: "#f9004d" }}>
                Projects
              </a>
            </li>
            <li className="pl-5">
              <a href="#" style={{ textDecoration: "none", color: "#f9004d" }}>
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
