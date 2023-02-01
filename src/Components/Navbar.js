import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link className="nav_index" to="/">
          Snacks baby!
        </Link>
      </h1>
      <Link to="/snacks/new">
        {" "}
        <button>Add a yummy!</button>
      </Link>
    </nav>
  );
}
