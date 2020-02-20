import React from 'react';
import {CardImg} from 'reactstrap';

const NasaCardImg = (props) => {
    return (
        <CardImg 
            src={props.imageUrl}
            alt={props.imageTitle} />
    )
}

export default NasaCardImg; 