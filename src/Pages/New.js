import React from "react";
import NewSnackForm from "../Components/NewSnackForm";
import { Link } from "react-router-dom";

import "./New.css";

export default function New() {
  return (
    <div>
      <div>
        <img
          className="newimg"
          src="https://cdn.dribbble.com/users/2008861/screenshots/15204794/media/1030bb3778e87d85708d88041b05a3d6.gif"
          alt="newimg"
        />
      </div>
      <div className="New-Form">
        <h4>Add a new Snack!</h4>
        <NewSnackForm />
      </div>
      <Link to="/snacks">
        {" "}
        <button className="backing-btn2">Back</button>
      </Link>
    </div>
  );
}
