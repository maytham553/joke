import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
const BtnNav = props => {
  return (
    <BrowserRouter>
      {props.bntInfo.map(bntInfo => {
        <div>
          <Link to={bntInfo.path}>{bntInfo.text + "   "}</Link> ;
          <Route
            path={bntInfo.path}
            exact
            component={() => {
              console.log("suc");
            }}
          />
          ;
        </div>;
      })}
      )
    </BrowserRouter>
  );
};

export default class Nav extends React.Component {
  render() {
    return (
      <span>
        <BtnNav
          bntInfo={[
            { text: "Home", path: "/", funName: "name" },
            { text: "Trend", path: "trend", funName: "name" },
            { text: "Upload", path: "upload", funName: "name" },
            { text: "Search", path: "search", funName: "name" }
          ]}
        />
      </span>
    );
  }
}
