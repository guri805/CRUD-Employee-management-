import React from 'react'
import { Navbar , Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const CustomNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
