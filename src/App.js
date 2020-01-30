import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import "./App.css";
import Root from "./Root";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Nav/>
          <Root/>
          <button class="bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-gray-200 transition-colors transition-500 transition-linear">
  Hover me to invert colors
</button>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
