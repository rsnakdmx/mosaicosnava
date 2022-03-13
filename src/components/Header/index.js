import React from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css';

const Header = () =>
{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href={ process.env.REACT_APP_PATH }>
                    <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH }>
                        <Image
                            alt="Logo"
                            src={ Logo }
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{ ' ' }
                        Mozaicos Artesanales Nava
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH }>Inicio</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'nosotros' }>Nosotros</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'catalogo' }>Nuestros productos</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'trabajos' }>Nuestros trabajos</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'contacto' }>Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;