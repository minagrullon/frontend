import React from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function Snack({
  snack: { id, name, image, protein, sugar, fiber, is_healthy },
}) {
  return (
    // <div className="snack_container">
    <Link to={`/snacks/${id}`}>
      <div className="single_snack">
        <img className="snack-img" src={image} alt={image} />
        <h5>{name}</h5>
        <HeartHealth snackHealth={is_healthy} />
      </div>
    </Link>
    // </div>
  );
}
