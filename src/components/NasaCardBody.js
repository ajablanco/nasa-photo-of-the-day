import React from 'react';
import { CardBody, CardText } from 'reactstrap';

const NasaCardBody = (props) => {
    return (
        <CardBody>
           
            <h5>Date: {props.imageDate}</h5>

            <CardText>{props.imageDesc}</CardText>
        </CardBody>
    )
}

export default NasaCardBody; 