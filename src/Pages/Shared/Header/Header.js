import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
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
                            <Nav.Link as={Link} to="/blogs" className='text-white'>Blogs</Nav.Link>

                            {
                                user && <div className='d-flex'>
                                    <Nav.Link as={Link} to="/manage" className='text-white'>Manage item</Nav.Link>
                                    <Nav.Link as={Link} eventKey={2} to="/add" className='text-white'>
                                        Add item
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/myItem" className='text-white'>My Item</Nav.Link>
                                </div>
                            }
                            {
                                user ? <button onClick={() => signOut(auth)}>Sign out</button> :
                                    <Nav.Link as={Link} to="/login" className='text-white'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;