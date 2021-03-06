import  React, { useState } from  'react';
import ReactPlayer from 'react-player'
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import "./descripcion.css";
import logoFacebook from "../images/facebook.png";
import logoInstagram from "../images/instagram.png";
import logoLinkedin from "../images/linkedin.png";
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
              height='auto'x
              progressInterval={1000}
            />
          </div>
            <Card.Body>
              <Card.Title>
                <center>
                  <b><a target="_blank" href={props.link} className='titulosProyectos'>{props.title}</a>
                  </b>
                </center>
              </Card.Title>
              <Card.Text>
                <center className='desc'>
                  {props.description}
                </center>
              </Card.Text>
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
                    <a href={props.linkedin} target="_blank">
                      <img src={logoLinkedin} alt="logo" width="55" height="55"/>
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