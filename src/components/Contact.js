import React from "react";

const Contact = () => {
  return (
    <>
      <div className="row pt-5">
        <h1 className="about-heading mx-auto">Contact me</h1>
      </div>{" "}
      <br />
      <div className="w-50 container">
        <input
          className="form-control contactInput"
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          className="form-control contactInput"
          type="text"
          placeholder="Email"
        />
        <br />
        <input
          className="form-control contactInput"
          type="text"
          placeholder="Write a Subject"
        />
        <br />
        <textarea
          className="form-control contactInput"
          type="text"
          placeholder="Your Message"
        ></textarea>
        <br />
      </div>
      <div className="row mx-auto">
        <button className="btn mx-auto">SUBMIT</button>
      </div>
    </>
  );
};

export default Contact;
