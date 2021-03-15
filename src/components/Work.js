import React from "react";
import mern from "../images/mern.jpg";
import php from "../images/php.jpg";

const Work = () => {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <span>
            <img src={mern} id="mern" className="p-4" alt="mern" />
          </span>
          <span>
            <img src={php} id="php" className="p-4" alt="php" />
          </span>
        </div>
        <div className="col-7">hi</div>
      </div>
    </>
  );
};

export default Work;
