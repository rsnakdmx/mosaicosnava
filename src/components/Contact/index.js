import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Googlemaps from './Googlemaps';

const Contact = () =>
{
    return(
        <Container fluid>
            <Row className="my-5">
                <Col md={ 12 } className="text-center">
                    <h1>¿Donde puedes encontrarnos?</h1>
                </Col>
            </Row>
            <Row className="my-5">
                <Col md={ 4 }>
                    <h5>Dirección</h5>
                    <address>
                        Calle Francisco Sarabia No. 17, colonia Pueblo de Santa Martha Acatitla, delegación Iztalapala 
                        C.P. 09510. Nos encontramos entre las calles de Celio Garcia y Consuelo.
                    </address>
                    <br />

                    <h5>Telefonos de contacto</h5>
                    <ul className="list-unstyled">
                        <li><a href="tel:5523602813">55-23-60-28-13</a></li>
                        <li><a href="tel:5632751571">56-32-75-15-71</a></li>
                        <li><a href="tel:5620707795">56-20-70-77-95</a></li>
                        <li>Local: <a href="tel:5557380550">55-57-38-05-50</a></li>
                    </ul>
                    <br />

                    <h5>E-mail</h5>
                    <ul className="list-unstyled">
                        <li><a href="mailto:mosaicosnava1934@hotmail.com">mosaicosnava1934@hotmail.com</a></li>
                    </ul>
                </Col>
                <Col md={ 8 }>
                    <Googlemaps />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;