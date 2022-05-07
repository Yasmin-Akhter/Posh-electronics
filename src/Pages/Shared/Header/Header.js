import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>


            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>Posh-Electronics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
                            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>

                            <Nav.Link href="#deets" className='text-white'>More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='text-white'>
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