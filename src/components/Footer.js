import  React, { useState } from  'react';  
import {Col, Row, Container, Button, Alert, Table, Card} from 'react-bootstrap';
import "./Footer.css";
import {Link} from  'react-router-dom';


function Footer(props){
    return ( 
        <footer class="text-white text-center text-lg-start bg-dark">
          <div class="container p-1">
            <div class="row mt-3">
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">

                <h5 class="text-uppercase mb-4">XXIX Feria de Software Virtual</h5>

                <a target="_blank" href="http://www.inf.utfsm.cl/" className='links'>Departamento de Informática</a><br></br>
                <small>Universidad Técnica Federico Santa María</small>
                
                  <div class="mt-4">
                    <Row>
                      <Col className='col-md-4' display='flex'>
                        <a href="https://www.facebook.com/feriadesoftwareutfsm/" target="_blank">
                          <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
                        </a>
                      </Col >
                      <Col className='col-md-4' display='flex'>
                        <a href="https://twitter.com/FeriaSoftware" target="_blank">
                          <img src="https://img.icons8.com/ios-filled/50/000000/twitter-circled--v1.png"/>
                        </a>
                      </Col >
                    
                      <Col className='col-md-4' display='flex'>
                        <a href="mailto:feria@inf.utfsm.cl" target="_blank">
                          <img src="https://img.icons8.com/ios-filled/50/000000/composing-mail.png"/>
                        </a>
                      </Col >
                    </Row>
                    <br></br>
                  </div>
                  
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <b>Campus Casa Central Valparaíso</b>
                <small>
                  <br></br>Av.España 1680, Valparaíso
                  <br></br>+56 (32) 2654242
                </small>
                <br></br>
                <br></br>
                <b>Campus Santiago San Joaquín</b>
                <small>
                  <br></br>Av. Vicuña Mackenna 3939, Santiago
                  <br></br>+56 (2) 2303 7200
                </small>
              </div>
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <center>
                  <img src="https://www.feriadesoftware.cl/wp-content/themes/AA-fesw2017/img/fesw-logo-w.png" class="logo" />
                </center>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer

