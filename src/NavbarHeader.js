import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';


const NavbarHeader = () => {

  return (
    // <div>
    //     <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/todo">Todo</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/dashboard">Dashboard</Link></li>
    //     </ul>
    // </div>

    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todo">Todo</Nav.Link>
            <Nav.Link href="/weather">Weather</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  )
}

export default NavbarHeader