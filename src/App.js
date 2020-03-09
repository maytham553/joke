import React from "react";
import { BrowserRouter} from "react-router-dom";
import Nav from "./component/Nav";
import "./App.css";
import Root from "./Root";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Nav/>
           <Root />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
