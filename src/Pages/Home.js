import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HealthySnack from "../Components/HealthySnack";

import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <img
          className="bg"
          src="https://atlasbiomed.com/blog/content/images/2020/06/2020-06-16-Prebiotic-quinoa-bowl.png"
          alt="homeimg"
        />
        <div className="bg-overlay"></div>
      </div>
      <div className="home-hero">
        <div className="home-text">
          <h2 style={{ color: "white" }}>Welcome To Snacks Baby! </h2>
          <h5 style={{ color: "white" }}>
            An App That Makes Tracking Your Snacking Habits Easier
          </h5>
        </div>
        <div className="home-btn-container">
          <Link to="/snacks">
            <div className="home-btn">Snack Track</div>
          </Link>
          <Link to="/healthysnack">
            <div className="home-btn">Healthy Snack Recipes!</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
