import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Nav,Navbar, Container} from "react-bootstrap"


function Nav2(prop) {
    return ( <>
    <Navbar fixed="top" collapseOnSelect bg="light" expand="lg" >
  <Container>
    <Navbar.Brand href="#home" >
        <h1>
                    {prop.titulo}
                    
                </h1></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="">
      <Nav  className="me-auto" ></Nav>
      <Nav>
      <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#nosotros">Dr. A.Collia</Nav.Link>
        <Nav.Link href="#imgcal">Turnos</Nav.Link>
        <Nav.Link href="#contenedorcontacto">Contacto</Nav.Link>
        <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
    </> );
}

export default Nav2;