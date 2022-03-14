import React from 'react';
import { Button, Container, Col, Image, Row } from 'react-bootstrap';
import landingImage from '../../assets/landingImage.jpeg';

const Landing = () =>
{
    return(
        <>
            <Image 
                alt="Mosaicos y Terrazos Nava" 
                loading="lazy" 
                fluid
                src={ landingImage } 
            />
            <Container fluid>
                <Row>
                    <Col md={ 12 } className="my-5 text-center">
                        <h2>¿Quienes somos?</h2>
                        <p className="text-muted">
                            Somos fabricantes desde 1934. Cada una de nuestras piezas es fabricada a mano y siguiendo los
                            más altos estandares de calidad, lo cúal nos permite obtener diseños únicos que elevan la 
                            plusvalía de su propiedad.
                        </p>

                        <Button variant="outline-dark">Ver más</Button>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col md={ 12 } className="my-5 text-center">
                        <h2>¿Dónde puedes encontrarnos?</h2>
                        <p className="text-muted">
                            Nos encontramos en Francisco Sarabia No. 17, Entre Celio Garcia y Consuelo, colonia 
                            Pueblo de Santa Martha Acatitla, delegacion Iztapalapa, codigo postal 09510.
                        </p>
                        <Button variant="outline-dark">Ver ubicación</Button>
                    </Col>
                </Row>
                <hr />
            </Container>
        </>
    );
}

export default Landing;