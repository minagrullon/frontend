import React from "react";
import NewSnackForm from "../Components/NewSnackForm";
import "./New.css"

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
        {/* <img
          className="new-img"
          src="https://i0.wp.com/i.pinimg.com/originals/93/a2/d7/93a2d7556d1d4fc891bfa32b753f01fd.gif"
          alt="homeimg"
          width={200}
        /> */}
        <h4>Add a new Snack!</h4>
      <NewSnackForm />
      </div>
      
    </div>
  );
}
