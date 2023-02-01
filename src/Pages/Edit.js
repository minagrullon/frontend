import React from "react";
import EditSnackForm from "../Components/EditSnackForm";
import { Link, useParams } from "react-router-dom";
import "./edit.css"
export default function Edit() {
  const {id} = useParams()
  return (
    <div>
      <div>
      <img
          className="editimg"
          src="https://i0.wp.com/i.pinimg.com/originals/93/a2/d7/93a2d7556d1d4fc891bfa32b753f01fd.gif"
          alt="editimg"
        />
      </div> 
      <div className="editform">
       {/* <div>
        <img
          className="new-img"
          src="https://i0.wp.com/i.pinimg.com/originals/93/a2/d7/93a2d7556d1d4fc891bfa32b753f01fd.gif"
          alt="homeimg"
          width={200}
        />
       </div> */}
       <div>
        <h4>Edit a Snack</h4>
      <EditSnackForm />
      <div className="back-btn">
        <Link to={`/snacks/${id}`}>Back</Link>
      </div>
       </div>
           
      </div>
   
    </div>
  );
}
