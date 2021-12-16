import React, {Component} from 'react';
import './App.css';
import {Navbar, Form, FormControl, Nav, Container, Button, Row, Col} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Exposicion from "./components/Exposiciones.js"
import Seminario from "./components/Seminarios.js"
import zoro from "./images/zoro.jpg";
import semi1 from "./images/semi1.jpeg";
import semi2 from "./images/semi2.jpg";
import { BrowserRouter as Router, Route, Switch, Link } from  'react-router-dom';
function App() {
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
      <Nav.Link as={Link} to="/Semis">SEMINARIOS</Nav.Link>
      <Nav.Link as={Link} to="/Expos">EXPOSICIONES</Nav.Link>
      </Nav>

      <Form inline>
      <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<center>
<h1>Feria de Software</h1> 
<br/>
<br/>
</center>


<Switch>
  <Route path="/Expos">
    <Container>
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

  <Route path="/Semis">
    <Container>
      <Col>
        <Col className='col-md-4'>
          <Seminario  title="Transformación Digital" description="Charla de Joaquín Trujillo en la que se nos instruirá sobre los cambios para la transformación digital" img={semi1} linksem="/Semis/seminario1" />
        </Col>
        <br/>
        <br/>
        <Col className='col-md-4'>
          <Seminario title="Objetivos de Desarrollo Sostenible" description=" Charla de Alfredo Collado en la que se hablará sobre la importacnia de los ODS en el mundo" img={semi2} linksem="/Semis/seminario2" />
        </Col>
      </Col>
     
    </Container>   
  </Route>
</Switch>

</Router>
  );
}

export default App;
