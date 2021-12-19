import  React, { useState } from  'react';
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import "./descripcion.css";

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home(props){
    const f=false,t=true;
    return (
        <Carousel width={"77%"} showThumbs={f} infiniteLoop={t} autoPlay={t} interval={2300} centerMode={t} showStatus={f} >
            <div>
                <img src={props.img1} />
            </div>
            <div>
                <img src={props.img2} />
            </div>
            <div>
                <img src={props.img3} />
            </div>
        </Carousel>
        );
}
export default Home

