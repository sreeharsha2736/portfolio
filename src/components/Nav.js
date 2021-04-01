import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const Nav = () => {
  const scrolltoabout = () => {
    window.scrollTo(0, 600);
  };
  return (
    <>
      <nav className="navbar navbar-expand-md ml-auto">
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
              <Link
                className="nav-link"
                id="home"
                onClick={() => window.scrollTo(0, 0)}
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li className="pl-5">
              <Link
                href="#"
                className="nav-link"
                onClick={() => window.scrollTo(0, 650)}
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>

            <li className="pl-5">
              <Link
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
                onClick={() => window.scrollTo(0, 1200)}
              >
                Projects
              </Link>
            </li>
            <li className="pl-5">
              <Link
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
                onClick={() => window.scrollTo(0, 1800)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
