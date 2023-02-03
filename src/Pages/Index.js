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
          alt="newimg"
        />
      </div>
      <div className="snacks_index">
        <Snacks />
      </div>
    </div>
  );
}
