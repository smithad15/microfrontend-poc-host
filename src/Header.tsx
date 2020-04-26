import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/">Host</Link>
      <Link to="/app1">App 1</Link>
      <Link to="/app2">App 2</Link>
    </nav>
  );
}

export default Header;
