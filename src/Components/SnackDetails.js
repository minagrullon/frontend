import { Howl } from "howler";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import heart from ".././assets/healthyfullheart.png";
import empty from ".././assets/emptyred.png";
// CSS
import "./SnackDetails.css";

//* Sound Effect
import removeSound from ".././assets/remove.mp3";
const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
  //* Sound Effect Function
  const playSound = (src) => {
    const mySound = new Howl({
      src,
      volume: 0.15,
      html5: true,
    });
    mySound.play();
  };

  const [snack, setSnack] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        console.log(res.data);
        setSnack(res.data);
      })
      .catch((err) => console.warn(err));
  }, [id]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() =>
        setTimeout(() => {
          navigate(`/snacks`);
        }, 1000)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <>
      <div className="card">
        <div className="bgg-detail-img">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/08/24/background-of-fresh-and-healthy-food-vegetables-vector-20580824.jpg"
            alt="bggimg"
            width={1450}
          />
        </div>
        <div className="card__content">
          <div className="card__front">
            <h3 className="card__title">{snack.name}</h3>
            <img
              className="card__subtitle"
              src={snack.image}
              alt="snack_icon"
            />
          </div>

          <div className="card__back">
            <div className="card__body">
              <img className="body_image" src={snack.image} alt="snack_icon" />
              <p>Fiber: {snack.fiber}</p>
              <p>Protein: {snack.protein}</p>
              <p>Sugar: {snack.added_sugar}</p>
              <p className="healthy-p">
                HEALTHY ?:{" "}
                {snack.is_healthy ? (
                  <img className="heartFilled" src={heart} alt={heart} />
                ) : (
                  <img className="heartEmpty" src={empty} alt={empty} />
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="button_container">
          <button
            className="show-back-btn"
            onClick={() => {
              navigate(`/snacks`);
            }}
          >
            Back!
          </button>
          <button
            className="show-edit-btn"
            onClick={() => {
              navigate(`/snacks/${id}/edit`);
            }}
          >
            Edit
          </button>
          <button
            className="show-delete-btn"
            onClick={() => {
              playSound(removeSound);
              deleteSnack();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
