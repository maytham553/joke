import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div
      className=" nav  nav_hover transition-w transition-500"
    >
      <div className="text-orange-300">iconnn</div>
      <Link className=" " to="/upload">
        UPLOAD
      </Link>
      <Link className="hover:bg-yellow-700" to="/find">
        FIND
      </Link>
      <Link className="" to="/template">
        TEMPLATES
      </Link>
      <Link className="" to="/trending">
        TRENDING
      </Link>
      <Link className="" to="/">
        HOME
      </Link>
    </div>
  );
}
