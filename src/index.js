import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Topheader from "./components/Topheader";
import TypedText from "./components/TypedText";
import Work from "./components/Work";
import "./main.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" component={About}>
              <Navbar />
            </Route>
          </Switch>
        </Router>

        <div className="homepage">
          <TypedText />
          <Topheader />
        </div>
        <About />
        <Work />
        <Contact />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
