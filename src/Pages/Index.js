import React from "react";
import Snacks from "../Components/Snacks";
import "./indexpg.css";

export default function Index() {
  return (
    <div>
      <div>
      {/* <img
          className="indexbg"
          src="https://i0.wp.com/i.pinimg.com/originals/93/a2/d7/93a2d7556d1d4fc891bfa32b753f01fd.gif"
          alt="newimg"
        /> */}
      </div>
      <div className="snacks_index">
      <h4>All Snacks</h4>
      <Snacks />
    </div>
    </div>
    
  );
}
