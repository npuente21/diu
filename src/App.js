import React, {Component} from 'react';
import './App.css';
import {Navbar, Form, FormControl, Nav, Container, Button, Row, Col} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Exposicion from "./components/Exposiciones.js"
import zoro from "./images/zoro.jpg";
import { BrowserRouter as Router, Route, Switch, Link } from  'react-router-dom';
import Login from "./components/login.js";
import {useSelector, useDispatch} from 'react-redux';
import { logout } from './redux/actions/autentication';
function App() {
  const count= useSelector((store) =>store.autenticacion.logged);
  const Name=useSelector((store) =>store.autenticacion.Nombre);
  const dispatch = useDispatch();
  if (count){
    var xd = "xd"
  }else{
    var xd= "xd`nt"
  }

const Logout=()=>{
  dispatch(logout(Name))
}

  return (
    <Router>
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href=""><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link}  to="/Sem">SEMINARIOS</Nav.Link>
        <Nav.Link as={Link} to="/Expos">EXPOSICIONES</Nav.Link>
      </Nav>

      {count==true&&(
        <Button onClick={Logout} variant="danger">Cerrar Sesión</Button>
      )}
      {count==false&&(
        <Button as={Link} to= "/Login" variant="outline-success">Iniciar Sesión</Button>
      )}
      
      
    </Navbar.Collapse>
  </Container>
</Navbar>


<Switch>
  <Route path="/Expos">
    <Container>
    <center>
<h1>Feria de Software {Name}</h1> 
<br/>
<br/>
</center>

    <Row >
     <Col className='col-md-4'> 
     <Exposicion title= "proyecto1" link="https://www3.animeflv.net/anime/ousama-ranking" img={zoro} />
     </Col> 
     <Col className='col-md-4'>
     <Exposicion title= "proyecto2" link="https://www3.animeflv.net/anime/ousama-ranking" img={zoro} />
     </Col>
     <Col className='col-md-4'>
     <Exposicion title= "proyecto3" link="https://www3.animeflv.net/anime/ousama-ranking" img={zoro} />
     </Col>
    </Row>
    <br/>
    <Row >
     <Col className='col-md-4'> 
     <Exposicion title= "proyecto4" link="https://www3.animeflv.net/anime/ousama-ranking" img={zoro} />
     </Col> 
     <Col className='col-md-4'>
     <Exposicion title= "proyecto5" link="https://www3.animeflv.net/anime/ousama-ranking" img={zoro} />
     </Col>
     <Col className='col-md-4'>
     <Exposicion title= "proyectoX" link="https://www3.animeflv.net/anime/ousama-ranking" img={zoro} />
     </Col>
    </Row>
    </Container>      
  </Route>

  <Route path="/Login" exact render = {props=> ( <Login {...props} />)}></Route>
</Switch>

</Router>
  );
}

export default App;
