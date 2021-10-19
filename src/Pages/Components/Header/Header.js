import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/UseAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    const element = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img className="fluid" width="184" height="29" src="/header-logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} className="px-4" to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className="px-4" to="/home#history">History</Nav.Link>
                            <Nav.Link as={HashLink} className="px-4" to="/home#services">Services</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut}>LogOut</Button> :
                                <Nav.Link as={Link} className="px-4" to="/login"><Button>LogIn</Button></Nav.Link>
                            }
                        </Nav>
                        <Navbar.Text>
                            {element}{user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;