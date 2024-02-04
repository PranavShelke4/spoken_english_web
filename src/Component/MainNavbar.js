import React from "react";
import "../Style/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          {/* <img
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
          Logo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home">Courses</Nav.Link>
            <Nav.Link className="nav-link" href="#link">About Us</Nav.Link>
            <Nav.Link className="nav-link" href="#link">Contact</Nav.Link>
            <Nav.Link className="nav-button" href="#link">
              <Button>Register</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
