import  React, { useState } from  'react';
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import {Link} from  'react-router-dom';
import "./seminario.css";
import "./seminario2.css";
function Semis(props){
    return (
    <Container>
        <Card style={{ width: '75rem'}}>
            <Card.Img variant="top" src={props.img}  />
            <Card.Body>
                <Row>
                    <Col xs={10}>
                        <Card.Text className='tit'>
                            {props.title}
                        </Card.Text>
                    </Col>
                    <Col>
                        <Button className='sem' href={props.linksem}>Entrar</Button>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Card.Text>{props.description}</Card.Text>
                </Row>
            </Card.Body>
        </Card>
    </Container>
    );
}

export default Semis