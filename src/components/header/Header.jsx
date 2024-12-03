import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { Navbar , Container , Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <a href="#" className='btn'>Contact us</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header