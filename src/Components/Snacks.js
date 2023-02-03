import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div className="snacks">
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </div>
  );
}
