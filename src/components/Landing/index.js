import React from 'react';
import { Button, Container, Col, Image, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import landingWebp from '../../assets/landing.webp';
import landingJpeg from '../../assets/landing.jpeg';
import Uno from '../../assets/1.jpeg';
import Unowebp from '../../assets/1.webp';
import Dos from '../../assets/2.jpeg';
import Doswebp from '../../assets/2.webp';
import Tres from '../../assets/3.jpeg';
import Treswebp from '../../assets/3.webp';
import Cuatro from '../../assets/4.jpeg';
import Cuatrowebp from '../../assets/4.webp';
import './styles.css';



const Landing = () =>
{
    return(
        <>
            <picture>
                <source
                    className="landingLogo" 
                    height={ 480 }
                    width={ 600 }
                    srcSet={ landingWebp } 
                />
                <Image 
                    alt="Mosaicos Artsenalaes Nava" 
                    className="landingLogo" 
                    height={ 480 }
                    width={ 600 }
                    src={ landingJpeg } 
                />
            </picture>
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
                    <Col md={ 12 } className="mt-5 text-center">
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
                <Row>
                    <Col md={{ offset: 4, span: 4 }} className="mb-5">
                        <Carousel autoPlay={ true } infiniteLoop={ true } showThumbs={ false }>
                            <div>
                                <picture>
                                    <source srcSet={ Unowebp } type="image/webp" />
                                    <img src={ Uno } />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={ Doswebp } type="image/webp" />
                                    <img src={ Dos } />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={ Treswebp } type="image/webp" />
                                    <img src={ Tres } />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={ Cuatrowebp } type="image/webp" />
                                    <img src={ Cuatro } />
                                </picture>
                            </div>
                        </Carousel>
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