import React from "react";
import { Card } from "../card/card-component.js";

import "./card-list-component.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.bassplayers.map((bass) => (
      <Card key={bass.id} bass={bass}></Card>
    ))}
  </div>
);
