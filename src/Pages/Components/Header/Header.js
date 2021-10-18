import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex flex-wrap">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/header-logo.png"
                            // width="30"
                            // height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        {/* React Bootstrap */}
                    </Navbar.Brand>
                    <Nav className="me-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#registration">Registration</Nav.Link>
                        <Button className="btn-success px-3" size="sm">Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;