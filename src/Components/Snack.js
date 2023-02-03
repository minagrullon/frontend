import React from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function Snack({
  snack: { id, name, image, protein, sugar, fiber, is_healthy },
}) {
  return (
    <Link to={`/snacks/${id}`}>
      <div className="single_snack">
        <img className="snack-img" src={image} alt={image} />
        <h5 className="snack-title">{name}</h5>
        <HeartHealth snackHealth={is_healthy} />
      </div>
    </Link>
  );
}
