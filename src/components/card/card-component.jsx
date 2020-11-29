import React from "react";

import "./card-component.css";
export const Card = (props) => (
  <div className="card">
    <img alt="bassplayer" src={props.bass.image}></img>
    <h2>{props.bass.name}</h2>
    <h3>{props.bass.style}</h3>
  </div>
);
