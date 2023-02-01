import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HealthySnack from "../Components/HealthySnack";

import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-text">
        <h2 style={{ color: "white" }}>Welcome Snacks Baby! </h2>
        <h5 style={{ color: "white" }}>An App That Makes Tracking Your Snacking Habits Easier</h5>

      </div>
      <div>
        
        <img
          className="bg"
          src="https://atlasbiomed.com/blog/content/images/2020/06/2020-06-16-Prebiotic-quinoa-bowl.png"
          alt="homeimg"
        />
      </div>
      <div className="home-btn">
        <Link to="/snacks">Snack Track</Link>
      </div>
      <br />
      <div className="home-btn">
        <Link to="/healthysnack">Healthy Snack Recipes!</Link>
      </div>
    </div>
  );
}
