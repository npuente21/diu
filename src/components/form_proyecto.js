import  React, { useState } from  'react';
import {Col, Row, Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './login.css'
import facebook from '../facebook.svg';
import twitter from '../twitter.svg';
import instagram from '../instagram.svg';
import youtube from '../youtube.svg';
import pc from '../laptop.svg';
import { almacenar_proyecto } from '../redux/actions/save_proyect';

function proyect(props){
    const [titulo, SetTitulo]= useState("")
    const [url_youtube, SetYoutube]= useState("")
    const [url_face, SetFace]= useState("")
    const [url_twitter, SetTwitter]= useState("")
    const [url_insta, SetInsta]= useState("")
    const [descripcion, SetDescr]= useState("")
    const [website, SetWeb] = useState("")

    const dispatch = useDispatch()
    
    const handleTitle=(e) =>{
        SetTitulo(e.target.value);
      }

      const handleYoutube=(e) =>{
        SetYoutube(e.target.value);
      }

      const handleFace=(e) =>{
        SetFace(e.target.value);
      }

      const handleTwitter=(e) =>{
        SetTwitter(e.target.value);
      }

      const handleInsta=(e) =>{
        SetInsta(e.target.value);
      }

      const handleDescrip=(e) =>{
        SetDescr(e.target.value);
      }

      const handleWeb=(e) =>{
        SetWeb(e.target.value);
      }

      const Submit=(e)=>{ 
        e.preventDefault();
        dispatch(almacenar_proyecto(
            {Titulo: titulo, 
            Descripcion: descripcion,
            video: url_youtube,
            facebook: url_face,   
            twitter: url_twitter,
            instagram: url_insta,
            website: website,
        }))
        props.history.push("/Expos");
      }
    

    return(
        <center>
                        
        <Form className='Form'>
            <Form.Group className="mb-3" controlId="Title">
                <Form.Label>TITULO</Form.Label>
                <Form.Control  placeholder="Titulo" onChange={handleTitle}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><img src ={youtube} width="40" height="40" ></img></Form.Label>
                <Form.Control type="text" placeholder='URL:'  onChange={handleYoutube} />
            </Form.Group>


            <Row className="mb-5">
                <Form.Group as={Col}  controlId="formGridEmail">
                    <Form.Label > <img src ={facebook} width="40" height="40" ></img> </Form.Label>
                    <Form.Control type="text" placeholder='URL:'   onChange={handleFace} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label><img src ={twitter} width="40" height="40"></img></Form.Label>
                    <Form.Control type="text" placeholder='URL:' onChange={handleTwitter} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label ><img src ={instagram} width="40" height="40"></img></Form.Label>
                    <Form.Control type="text"  placeholder='URL:' onChange={handleInsta} />
                </Form.Group>
            </Row>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label><img src ={pc} width="40" height="40" ></img></Form.Label>
                <Form.Control type="text" placeholder='URL:'  onChange={handleWeb} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleDescrip} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={Submit}>
                Guardar Cambios
            </Button>
        </Form>


        </center>
        
  
    )
}
export default proyect;