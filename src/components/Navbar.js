import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../main.css";

const Navbar = () => {
  const [header, setHeader] = useState("header");
  const listenScrollEvent = () => {
    if (window.scrollY > 73) {
      setHeader("header1");
    } else {
      setHeader("header");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div>
      <div id={header} className="container-fluid ml-auto">
        <Nav />
      </div>
    </div>
  );
};

export default Navbar;
