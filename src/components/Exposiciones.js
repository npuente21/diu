import  React, { useState } from  'react';
import ReactPlayer from 'react-player'
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import "./descripcion.css";
import logoFacebook from "../images/facebook.png";
import logoInstagram from "../images/instagram.png";
import logoTwitter from "../images/twitter.png";
import {Link} from  'react-router-dom';

function Expos(props){
    const [estado, setEstado] = useState("Pendiente");

    return (
        <Container>
          <Card style={{ width: '20rem'}}>
          <div>
            <ReactPlayer
              url={props.url}
              className='react-player'
              controls='true'
              loop='true'
              width='auto'
              height='auto'
              progressInterval={1000}
            />
          </div>
            <Card.Body>
              <Card.Title>
                <center><b>{props.title}</b></center>
              </Card.Title>
              <Card.Text>
                <center className='desc'>
                  {props.description}
                </center>
              </Card.Text>
              <a href ={props.link} target="_blank"> 
                <center> Más Información</center>
              </a>
              <br/>
              <center>
                <Row>
                  <Col className='col-md-4' display='flex'>
                    <a href={props.facebook} target="_blank">
                      <img src={logoFacebook} alt="logo" width="55" height="55"/>
                    </a>
                  </Col >
                  <Col className='col-md-4' display='flex'>
                    <a href={props.instagram} target="_blank">
                      <img src={logoInstagram} alt="logo" width="55" height="55"/>
                    </a>
                  </Col >
                  
                  <Col className='col-md-4' display='flex'>
                    <a href={props.twitter} target="_blank">
                      <img src={logoTwitter} alt="logo" width="55" height="55"/>
                    </a>
                  </Col >
                </Row>
              </center>
            </Card.Body>
            
          </Card>
          
        </Container>

    


    ); 
    
}
export default Expos