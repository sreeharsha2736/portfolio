import React from "react";
import Typed from "react-typed";
const TypedText = () => {
  return (
    <>
      <div className="typed-text ml-auto text-center">
        <Typed
          strings={[
            "Welcome to My Portfolio",
            "Let you know about me",
            "welcome",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
    </>
  );
};

export default TypedText;
