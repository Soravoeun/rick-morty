import React from "react";

import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";

function NavBar() {
  return (
    <header>
      <Link to="/" className="text-1xl md:text-3xl lg:text-4xl">
        <img className="max-w-20 px-1" src={logo1} alt="Logo" />
      </Link>
    </header>
  );
}

export default NavBar;
