import React from 'react';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoWebp from '../../assets/logo.webp';
import logoPng from '../../assets/logo.png';
import './styles.css';

const Header = () =>
{
    return(
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href={ process.env.REACT_APP_PATH }>
                    <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH }>
                        <picture>
                            <source
                                className="d-inline-block align-top" 
                                width="30"
                                height="25"
                                srcSet={ logoWebp } 
                            />
                            <Image 
                                alt="Logo"
                                className="d-inline-block align-top" 
                                width="30"
                                height="25"
                                src={ logoPng } 
                            />
                        </picture>
                        { ' ' }Mozaicos Artesanales Nava
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH }>Inicio</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'nosotros' }>¿Quienes somos?</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'lavaderos' }>Lavaderos</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'mosaicos' }>Mosaicos</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'terrazos' }>Terrazos</Nav.Link>
                        <Nav.Link as={ Link } to={ process.env.REACT_APP_PATH + 'ubicacion' }>Ubicación</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;