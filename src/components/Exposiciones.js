import  React, { useState } from  'react';
import ReactPlayer from 'react-player'
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import "./descripcion.css";
import {Link} from  'react-router-dom';

function Expos(props){
    const [estado, setEstado] = useState("Pendiente");

    return (
        <Container>
          <Card style={{ width: '18rem'}}>
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
              <a href ={props.link}> 
                <center> Más Información</center>
              </a>
            </Card.Body>
            
          </Card>
          
        </Container>

    


    ); 
    
}
export default Expos