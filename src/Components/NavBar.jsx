import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <Navbar bg="warning" variant="light" expand="lg" sticky="top"> 
            <Container >
                <Navbar.Brand href="#home">
                     <FontAwesomeIcon icon={faBurger} /> 
                    {' '}Rancid Burger
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Burgers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Rancid Bacon</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">American Burger</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">Crispy</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/2.4">Cheeseburger</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Papas Fritas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Papas fritas </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cheddar y Bacon</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Mas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar