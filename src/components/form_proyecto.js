import  React, { useState } from  'react';
import {Col, Row, Form, Button} from 'react-bootstrap';
import './login.css'
import facebook from '../facebook.svg';
import twitter from '../twitter.svg';
import instagram from '../instagram.svg';

function proyect(props){
    
    
    return(
        <center>
                        
        <Form className='Form'>
            <Form.Group className="mb-3" controlId="Title">
                <Form.Label>TITULO</Form.Label>
                <Form.Control  placeholder="Titulo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Video</Form.Label>
                <Form.Control type="file" rows={3} />
            </Form.Group>


            <Row className="mb-5">
                <Form.Group as={Col}  controlId="formGridEmail">
                    <Form.Label > <img src ={facebook} width="40" height="40" ></img> </Form.Label>
                    <Form.Control type="text" placeholder='URL:'  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><img src ={twitter} width="40" height="40"></img></Form.Label>
                    <Form.Control type="text" placeholder='URL:'  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label ><img src ={instagram} width="40" height="40"></img></Form.Label>
                    <Form.Control type="text"  placeholder='URL:' />
                </Form.Group>
            </Row>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


        </center>
        
  
    )
}
export default proyect;