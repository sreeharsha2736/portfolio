import React from "react";
import Tabsection from "./Tabsection";

const About = () => {
  return (
    <>
      <div className="row pt-5">
        <h1 className="about-heading mx-auto">About me</h1>
      </div>

      <div className="container" style={{ color: "white" }}>
        <Tabsection />
      </div>
    </>
  );
};

export default About;
