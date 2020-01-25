import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
