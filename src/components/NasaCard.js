import React from 'react';
import { Card } from "reactstrap";
import NasaCardTitle from './NasaCardTitle';
import NasaCardImg from './NasaCardImg';
import NasaCardBody from './NasaCardBody';



const NasaCard = (props) => {
    return (
        <Card>
            <NasaCardTitle
                imageTitle={props.imageData['title']}  />
                
                <div className="imgAndBody">
                <NasaCardImg className="testing123"
                imageUrl={props.imageData['url']}
                imageTitle={props.imageData['title']} />
                <NasaCardBody 
                imageDate={props.imageData['date']}
                    imageDesc={props.imageData['explanation']} />
                </div>
            
        </Card>
    )
}

export default NasaCard; 