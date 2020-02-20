import React from "react";

const HeroImageContainer = props => {
  return (
    <div className="heroImageContainer" key={props.id}>
      <h2>{props.title}</h2>
      <div className="imgAndCaption"> 
        <div className="heroImage"><img className="apod"alt="Nasa pic of the Day" src={props.imgURL} /></div>
       <div className="textContainer"><h3>Explanation:</h3><h4 className="text">{props.explanation}</h4> <h3>Date: {props.date}</h3></div>
      </div>
      <br></br>
      <footer>Copyright 2020 NASA</footer>
    </div>
  );
};
export default HeroImageContainer;
