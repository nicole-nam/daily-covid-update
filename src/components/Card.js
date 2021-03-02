import React from "react";

function Card(props) {
  return (
    <div>
      <h1>{props.province}</h1>
      <p>Date: {props.date}</p>
      <p>New Cases: {props.new}</p>
      <p>Active Cases: {props.cases}</p>
      <p>Recovered: {props.recovered}</p>
      <p>Deaths: {props.deaths}</p>
    </div>
  );
}

export default Card;
