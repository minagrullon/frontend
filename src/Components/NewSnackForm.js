import { Howl } from "howler";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//* Sound Effects
import addSound from ".././assets/ding.mp3";
import removeSound from ".././assets/remove.mp3";
import typingSound from ".././assets/typing.mp3";
const API = process.env.REACT_APP_API_URL;

export default function NewSnackForm() {
  //* Sound Effec Function
  const playSound = (src) => {
    const mySound = new Howl({
      src,
      volume: 0.1,
      html5: true,
    });
    mySound.play();
  };

  const navigate = useNavigate();

  const addSnack = (newSnack) => {
    const { image } = newSnack
    let snack;
    if(!image) {
      snack = {...newSnack, image: "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"}
    } else {
      snack = newSnack
    }
    axios
      .post(`${API}/snacks`, snack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.log(error)
      )
      .catch((error) => console.warn(error));
  };

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: "",
  });
  const handleTextChange = (e) => {
    // playSound(typingSound);
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSnack(snack);
  };

  return (
    <div className="new_form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name of the snack"
            required
          />
        </label>
        <label htmlFor="fiber">
          Fiber:{" "}
          <input
            id="fiber"
            type="number"
            value={snack.fiber}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="protein">
          Protein:{" "}
          <input
            id="protein"
            type="number"
            value={snack.protein}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="added_sugar">
          Added Sugar:
          <input
            id="added_sugar"
            value={snack.added_sugar}
            type="number"
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="image">
          Image url:
          <input
            id="image"
            value={snack.image}
            type="string"
            placeholder="http://"
            onChange={handleTextChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
