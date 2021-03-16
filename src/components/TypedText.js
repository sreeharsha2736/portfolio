import React from "react";
import Typed from "react-typed";
const TypedText = () => {
  return (
    <>
      <div className="typed-text ml-auto text-center">
        <Typed
          strings={["Welcome to My Portfolio", "Let me Introduce to you"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </>
  );
};

export default TypedText;
