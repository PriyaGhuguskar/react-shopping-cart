import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Navcompo = () => {
  return (
    <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">Shopping Cart</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href=""></Nav.Link>
     
        
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/">Home Page</Nav.Link>
          <Nav.Link as={NavLink} to="/cartPage">Cart Page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  )
}

export default Navcompo