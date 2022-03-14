import React from 'react';
import { Button, Container, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

                        <Link to={ process.env.REACT_APP_PATH + 'nosotros' }>
                            <Button variant="outline-dark">
                                Ver más
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <hr />

                <Row>
                    <Col md={ 12 } className="my-5 text-center">
                        <h2>¿Por qué se recomienda el mosaico y el terrazo?</h2>
                        <p className="text-muted">
                            El mosaico hidráulico es un material resistente hecho a base de marmol blanco, cemento blanco, 
                            arena y pigmentos de color. La pasta resultante se vierte en un molde. Dicho molde puede ser uno 
                            que ya se tenga en existencia o se puede mandar a hacer. 
                        </p>
                        <p className="text-muted">
                            El mosaico hidráulico es un material ecológico ya que durante su elaboración no se necesita 
                            combustión alguna.
                        </p>
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
                        <Link to={ process.env.REACT_APP_PATH + 'ubicacion' }>
                            <Button variant="outline-dark">
                                Ver ubicación
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <hr />
            </Container>
        </>
    );
}

export default Landing;