import React from "react";
import { Link } from "react-router-dom";
import "../Pages/home.css";
import "./Healthy.css";

function HealthySnack() {

  return (
    <div>
      <div className="Healthysnacks-btns-container">
        <div className="bggimg">
          <img
            src="https://cdn.dribbble.com/users/2008861/screenshots/14293050/media/81c828595bd4135765fa3df8087dd467.gif"
            alt="bggimg"
          />
        </div>
        <div className="Healthysnacks-btns-1">
          <h4 className="h4-1">
            <a
              href={"https://www.acouplecooks.com/healthy-snack-recipes/"}
              target="_blank"
              rel="noreferrer"
            >
              Healthy Snack Recipes
            </a>
          </h4>
        </div>
        <br />
        <div className="Healthysnacks-btns-2">
          <h4 className="h4-2">
            <a
              href={"https://www.ambitiouskitchen.com/no-bake-snacks/"}
              target="_blank"
              rel="noreferrer"
            >
              No Bake Snacks
            </a>
          </h4>
        </div>
        <br />

        <div className="Healthysnacks-btns-3">
          <h4 className="h4-3">
            <a
              href={"https://www.ambitiouskitchen.com/drinks/"}
              target="_blank"
              rel="noreferrer"
            >
              Healthy Drinks
            </a>
          </h4>
        </div>
        <br />

        <div className="Healthysnacks-btns-4">
          <h4 className="h4-4">
            <a
              href={
                "https://www.staples.com/low-calorie-snack-box/product_24486567?cid=PS:GS:SBD:PLA:FdBrk&gclid=Cj0KCQiA8t2eBhDeARIsAAVEga2QkoGgPlZZCExvX_tfNsoIsNkK1Trz-WHDR3YxtzyHMXLQ8oWuk_gaAvyGEALw_wcB"
              }
              target="_blank"
              rel="noreferrer"
            >
              Snack Box
            </a>
          </h4>
        </div>
      </div>
      <div className="backing-btn">
        <Link to={`/`}>Back!</Link>
      </div> 
    </div>
  );
}

export default HealthySnack;
