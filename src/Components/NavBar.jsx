import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{color: "orange"}} href="/">Rancid Burger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                color: "orange",
              }}
            >
              Home
            </Link>
            <NavDropdown
              title="Menú" 
              id="basic-nav-dropdown"
              
            >
              <NavDropdown.Item>
                <Link style={{color: "orange"}} to="/category/hamburguesas">Hamburguesas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{color: "orange"}} to="/category/acompañamientos">Acompañamientos</Link>
              </NavDropdown.Item>
            
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
