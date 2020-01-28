import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-yellow-100   text-white bg-center text-right min-w-full  flex justify-around text-sm font-bold pl-6">
      <div className="text-orange-300 pr-3">iconnn</div>
      <Link className="" to="/upload">
        UPLOAD
      </Link>
      <Link className="" to="/find">
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
