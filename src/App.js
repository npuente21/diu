import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './App.css';
import {Navbar, Form, FormControl, Nav, Container, Button, Row, Col} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Exposicion from "./components/Exposiciones.js"
import upload from "./images/upload.png";
import logoFeria from "./images/logo-fesw.png";
import { BrowserRouter as Router, Route, Switch, Link } from  'react-router-dom';
function App() {
  return (
    <Router>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="">
      <a href="/Expos"><img src={logoFeria} alt="logo" width="120" height="70"/></a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">SEMINARIOS</Nav.Link> 
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
     <Exposicion title= "ChainVote" description="ChainVote consiste en una aplicación de votación segura y anónima basada en blockchain y algoritmos de inteligencia artificial para así garantizar la seguridad y identidad del voto emitido" link="https://chainvote.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=4WcDnVQGIQc&ab_channel=ChainVote" />
     </Col> 
     <Col className='col-md-4'>
     <Exposicion title= "Cooperaty" description="Cooperaty es una plataforma descentralizada que te permite aprender a invertir y mejorar tus habilidades sin importar tu nivel de experiencia en inversiones." link="https://cooperaty.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=HRxWAJ0HqN4&ab_channel=CyMon"/>
     </Col>
     <Col className='col-md-4'>
     <Exposicion title= "Price2Be" description="Sugerencia de Precio utilizando Inteligencia Artificial sumado a un Estudio de Mercado con información valiosa para vendedores a modo de potenciar las ventas dentro de Marketplaces." link="https://price2be.feriadesoftware.cl/#/" url="https://www.youtube.com/watch?v=d_rIDkm7huE&ab_channel=Price2Be"/>
     </Col>
    </Row>
    <br/>
    <Row >
     <Col className='col-md-4'> 
     <Exposicion title= "MagiClass" description="Magiclass es una plataforma de apoyo al aprendizaje que otorga diferentes herramientas para profesores." link="https://magiclass.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=p1GGxl2BpsQ&ab_channel=Magiclass" />
     </Col> 
     <Col className='col-md-4'>
     <Exposicion title= "Lyzerclass" description="Recibe feedback de tus clases online de manera rápida y sencilla. Sube tu grabación y empieza a revisar tus resultados." link="https://lyzerclass.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=3H_MW1Tz6eg&feature=emb_logo&ab_channel=LyzerClass"/>
     </Col>
    </Row>
    </Container>
    
      
      
  </Route>
</Switch>

</Router>
  );
}

export default App;
