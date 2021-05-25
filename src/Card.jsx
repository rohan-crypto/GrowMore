import React from "react";
import { NavLink, Link } from "react-router-dom";
// import web from "./Images/web-dev.png";

const Card = (props) => {

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="Sorry for inconvenience" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>

            {/* I AM NOT CLEAR ABOUT LINE 20-21 */}
            {/* using NavLink you can only redirect user to a component of the same website */}
            {/* redirecting to external website is tough or not possible */}
            {/* <NavLink to="" className="btn btn-primary">
              Read More 
            </NavLink> */}

            {/* if you want to redirect user to an external website */}
            <a href= {props.link} target= "_blank">
              <button className= "btn btn-primary">Read More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
