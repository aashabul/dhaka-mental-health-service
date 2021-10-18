import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="fluid" width="184" height="29" src="/header-logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="px-4" href="#features">Home</Nav.Link>
                            <Nav.Link className="px-4" href="#pricing">Services</Nav.Link>
                            <Nav.Link className="px-4" href="#pricing">Registration</Nav.Link>
                            <Button>LogIn</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;