import React from "react";
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <div className="errorpg">
      <h3>Error ya broke soemthing! ya fool</h3>;
      <img
      className="dwight"
      src="https://media.tenor.com/SVcLNZOi8bkAAAAM/rainn-wilson-evil-laugh.gif"
      alt="dwightlaugh"
      />
      <div className="backbtn">
        <Link to="/"><button>Back</button></Link>
      </div>
    </div>
  );
}
