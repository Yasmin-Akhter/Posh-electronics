import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>


            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Nav.Link as={Link} to="/" className='text-white'>Posh-Electronics</Nav.Link>
                    <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="features" className='text-white'>Features</Nav.Link>
                            <Nav.Link as={Link} to="pricing" className='text-white'>Pricing</Nav.Link>

                            <Nav.Link as={Link} to="/login" className='text-white'>Login</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} to="memes" className='text-white'>
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;