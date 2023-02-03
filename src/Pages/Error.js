import React from "react";
import { Link } from "react-router-dom";

import "./error.css";

export default function Error() {
  return (
    <div>
      <div>
        <img
          className="err-bg"
          src="https://thumbs.gfycat.com/CautiousBarrenGarpike-size_restricted.gif"
          alt="error-bg"
          height={1000}
        />
       </div>
      <div className="errorpg">
        <h3 className="error-h2">Error ya broke soemthing! ya fool</h3>;
        <img
          className="dwight"
          src="https://media.tenor.com/SVcLNZOi8bkAAAAM/rainn-wilson-evil-laugh.gif"
          alt="dwightlaugh"
        />
        <div className="backbtn">
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
