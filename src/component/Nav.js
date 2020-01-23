import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const LinkPush = props => (
  <Link to={props.btnInfo.path}>{props.btnInfo.text + "   "}</Link>
);

const RoutePush = props => (
  <Route
    path={props.btnInfo.path}
    exact
    component={() => {
      console.log("suc");
    }}
  />
);

const BtnNav = props => (
  <BrowserRouter>
    
      {props.btnInfo.map(btnInfo => {
        return <LinkPush btnInfo={btnInfo} />;
      })}
      {props.btnInfo.map(btnInfo => {
        return <RoutePush btnInfo={btnInfo} />;
      })}
  
  </BrowserRouter>
);

export default () => {
  
    return (
      <BtnNav
        btnInfo={[
          { text: "Home", path: "/", funName: "name" },
          { text: "Trend", path: "trend", funName: "name" },
          { text: "Upload", path: "upload", funName: "name" },
          { text: "Search", path: "search", funName: "name" }
        ]}
      />
    );
  
}
