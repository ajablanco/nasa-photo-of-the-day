import React from "react";

const HeroImageContainer = props => {
  return (
    <div className="heroImageContainer" key={props.id}>
      <h2>Photo of the Day: {props.title}</h2>
      <div className="heroImage"> 
        <img alt="Nasa pic of the Day" src={props.imgURL} />
      </div>
      <div className="bottom">
        <p>Date: {props.date}</p>
        <p>Explanation: {props.explanation}</p>
      </div>
    </div>
  );
};
export default HeroImageContainer;
