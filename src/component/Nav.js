import React from "react";
import {Link} from "react-router-dom";



export default function Nav() {
  return <div>
    <Link style={{padding : 8}} to='/'>HOME</Link>
    <Link to='/trending'>TRENDING</Link>
    <Link to='/template'>TEMPLATES</Link>
    <Link to='/find'>FIND</Link>
    <Link to='/upload'>UPLOAD</Link>
  </div>
}
