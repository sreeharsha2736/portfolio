import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components.js/Navbar";
import TypedText from "./components.js/TypedText";
import "./main.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="first">
          <TypedText />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
