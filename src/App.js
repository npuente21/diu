import React, {Component} from 'react';
import './App.css';
import {Navbar, Form, FormControl, Nav, Container, Button, Row, Col} from 'react-bootstrap' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Exposicion from "./components/Exposiciones.js"
import logoFeria from "./images/logo-fesw.png";
import Seminario from "./components/Seminarios.js"
import semi1 from "./images/semi1.jpeg";
import semi2 from "./images/semi2.jpg";
import { BrowserRouter as Router, Route, Switch, Link } from  'react-router-dom';
import Login from "./components/login.js";
import {useSelector, useDispatch} from 'react-redux';
import { logout } from './redux/actions/autentication';
import Proyect from './components/form_proyecto.js';




function App() {
  const count= useSelector((store) =>store.autenticacion.logged);
  const Name=useSelector((store) =>store.autenticacion.Nombre);

  const Titulo= useSelector((store)=> store.proyect_reducer.Titulo)
  const Descripcion= useSelector((store)=> store.proyect_reducer.Descripcion)
  const url= useSelector((store)=> store.proyect_reducer.video)
  const website = useSelector((store)=>store.proyect_reducer.website)
  const facebook = useSelector((store)=>store.proyect_reducer.facebook)
  const instagram = useSelector((store)=>store.proyect_reducer.instagram)
  const twitter = useSelector((store)=>store.proyect_reducer.twitter)

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
    <Navbar.Brand href="">
      <a href="/Expos"><img src={logoFeria} alt="logo" width="120" height="70"/></a>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link className='col-md-11 offset-md-8' as={Link} to="/Semis">SEMINARIOS</Nav.Link>
      <Nav.Link className='col-md-2 offset-md-9' as={Link} to="/Expos">EXPOSICIONES</Nav.Link>
      </Nav>

      {count==true&&(
        <Row>
          <Col className='col-md-4'>
            <Button as={Link} to= "/Proyect" variant="outline-info" size='sm' >Mi Proyecto</Button>
          </Col>
          <Col className='offset-md-3'>
            <Button onClick={Logout} variant="danger" size='sm'>Cerrar Sesión</Button>
          </Col >
            
        </Row>
        
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
      <h3>{Titulo+"chao"}"</h3>
      <br/>
      <br/>
    </center>

    <Row >
      <Col className='col-md-4'> 
        <Exposicion title= "ChainVote" facebook="https://www.facebook.com/Chainvote/" instagram="https://www.instagram.com/chainvote.cl/" linkedin="https://www.linkedin.com/company/team-votti/" description="ChainVote consiste en una aplicación de votación segura y anónima basada en blockchain y algoritmos de inteligencia artificial para así garantizar la seguridad y identidad del voto emitido" link="https://chainvote.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=4WcDnVQGIQc&ab_channel=ChainVote" />
      </Col> 
      <Col className='col-md-4'>
        <Exposicion title= "Cooperaty" facebook="https://www.facebook.com/cooperatyapp" instagram="https://www.instagram.com/cooperatyapp/?utm_source=ig_embed&ig_rid=366e6cfd-d868-4d9c-9efa-d5b58ad9f480" description="Cooperaty es una plataforma descentralizada que te permite aprender a invertir y mejorar tus habilidades sin importar tu nivel de experiencia en inversiones." link="https://cooperaty.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=HRxWAJ0HqN4&ab_channel=CyMon"/>
      </Col>
      <Col className='col-md-4'>
        <Exposicion title= "Price2Be" facebook="https://www.facebook.com/price2be" instagram="https://www.instagram.com/price2be/" description="Sugerencia de Precio utilizando Inteligencia Artificial sumado a un Estudio de Mercado con información valiosa para vendedores a modo de potenciar las ventas dentro de Marketplaces." link="https://price2be.feriadesoftware.cl/#/" url="https://www.youtube.com/watch?v=d_rIDkm7huE&ab_channel=Price2Be"/>
      </Col>
    </Row>
    <br/>
    <Row >
     <Col className='col-md-4'> 
     <Exposicion title= "MagiClass" facebook="https://www.facebook.com/Magiclass-255165123054042" instagram="https://www.instagram.com/magiclass.cl/" linkedin="https://www.linkedin.com/company/rubber-duck-cl/" description="Magiclass es una plataforma de apoyo al aprendizaje que otorga diferentes herramientas para profesores." link="https://magiclass.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=p1GGxl2BpsQ&ab_channel=Magiclass" />
     </Col> 
     <Col className='col-md-4'>
     <Exposicion title= "Lyzerclass" facebook="https://www.facebook.com/LyzerClass-FESW-103901782054504" instagram="https://www.instagram.com/lyzerclass/" description="Recibe feedback de tus clases online de manera rápida y sencilla. Sube tu grabación y empieza a revisar tus resultados." link="https://lyzerclass.feriadesoftware.cl/" url="https://www.youtube.com/watch?v=3H_MW1Tz6eg&feature=emb_logo&ab_channel=LyzerClass"/>
     </Col>

    {Titulo != "" &&(
      <Col className='col-md-4'>
      <Exposicion title={Titulo} facebook={facebook} instagram={instagram} linkedin={twitter} description={Descripcion} link={website} url= {url}/>
      </Col>
    )}

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
  <Route path="/Proyect" exact render = {props=> ( <Proyect {...props} />)}></Route>
  <Route path="/Login" exact render = {props=> ( <Login {...props} />)}></Route>
</Switch>

</Router>
  );
}

export default App;
