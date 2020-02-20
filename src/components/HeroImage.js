import React, { useState, useEffect } from "react";
import HeroImageContainer from "./HeroImageContainer";
import axios from "axios";

export default function HeroImage() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=CoLe1Uy668uIZaLABdLWafc3NvJCLjYb4CgWt6WU`)
        .then(response => {
          const heroImages = response.data;
          console.log(heroImages);
          setImages(heroImages);
        })
        .catch(error => {
          console.log("sorry no image", error);
        });
    }, []);
    return (
        <div>
                <HeroImageContainer 
                imgURL={images.url}
                explanation={images.explanation}
                title={images.title}
                date={images.date}
                />
        </div>
    );
}
