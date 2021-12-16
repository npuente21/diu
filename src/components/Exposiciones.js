import  React, { useState } from  'react';
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import {Link} from  'react-router-dom';

function Expos(props){
    const [estado, setEstado] = useState("Pendiente");

    return (
        <Container>
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src= {props.img} />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}    </Card.Text>
    <a href ={props.link}>Más Información</a>
  </Card.Body>
</Card>
    </Container>


    ); 
    
}
export default Expos