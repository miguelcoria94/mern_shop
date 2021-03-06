import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
      <header className="header">
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Beauty Empire</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart p-1"></i>Cart
                </Nav.Link>
                <Nav.Link href="/login">
                  <i className="fas fa-user p-1"></i>Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header
