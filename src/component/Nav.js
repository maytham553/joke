import React from "react";
import {Link} from "react-router-dom";

function navStyle() {
  var x = document.getElementById("nav");
  var y = document.getElementById("nav_btn")
  console.log(x)
  if (x.className === "nav" && y.className=== "ion-md-close") {
    x.className = "nav_ball";
    y.className = "ion-ios-reorder";
  } else {
    x.className = "nav";
    y.className = "ion-md-close";
  }
  console.log(x)
}


export default function Nav() {
  return <div className="nav_ball" id="nav">
    
    <Link to='/'>HOME</Link>
    <Link to='/trending'>TRENDING</Link>
    <Link to='/template'>TEMPLATES</Link>
    <Link to='/find'>FIND</Link>
    <Link to='/upload'>UPLOAD</Link>
    <a className="icon ion-ios-reorder " id="nav_btn" onClick={navStyle}>
</a>
  </div>
}
