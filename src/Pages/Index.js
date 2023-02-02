import React from "react";
import Snacks from "../Components/Snacks";
import "./indexpg.css";

export default function Index() {
  return (
    <div>
      <div>
      <img
          className="indexbg"
          src="https://flevix.com/wp-content/uploads/2019/12/Live-Wave-Background.svg"
        //  src="https://cdn.dribbble.com/users/2354210/screenshots/4832350/shape_fun.gif"
          alt="newimg"
        />
      </div>
      <div className="snacks_index">
      {/* <h4>All Snacks</h4> */}
      <Snacks />
    </div>
    </div>
    
  );
}
