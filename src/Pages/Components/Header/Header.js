import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="fluid" width="184" height="29" src="/header-logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className="px-4" to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} className="px-4" to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className="px-4" to="/home#services">Services</Nav.Link>
                            {user?.email ?
                                <Button>LogOut</Button> :
                                <Button>LogIn</Button>
                            }
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;