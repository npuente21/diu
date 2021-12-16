import  React, { useState } from  'react';
import  {Container, Button, Form, Row} from 'react-bootstrap';
import {login} from '../redux/actions/autentication.js';
import {useDispatch} from 'react-redux';
import './login.css';
function Login(props){

    const [Name, setName]=useState("");
    const [Clave, setClave]=useState("");
    const dispatch= useDispatch();
    const handleName=(e) =>{
        setName(e.target.value);
      }
    const handleClave=(e) =>{
        setClave(e.target.value);
      }

      const Submit=(e)=>{ 
        e.preventDefault();
        dispatch(login(Name))
        props.history.push("/Expos");
      }

    return (
    <Container>
        <center>
        <Form className="Login" >
            <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Ingrese Usuario</Form.Label>
            <Form.Control  type="text" placeholder="user" onChange={handleName} />
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Ingrese Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" onChange={handleClave} />
          </Form.Group>
         <br/>
          <Button variant="primary" type="submit" onClick={Submit}>
            INGRESAR
          </Button>
          
        </Form>
        </center>
    </Container>
    
    );

}

export default Login;