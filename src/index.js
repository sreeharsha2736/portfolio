import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Topheader from "./components/Topheader";
import TypedText from "./components/TypedText";
import Work from "./components/Work";
import "./main.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="homepage">
          <TypedText />
          <Topheader />
        </div>
        <About />
        <Work />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
