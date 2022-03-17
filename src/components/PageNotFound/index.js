import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import acercaDeWebp from '../../assets/acercadenostros.webp';
import acercaDeJpg from '../../assets/acercadenostros.jpg';

const Pagenotfound = () =>
{
    return(
        <Container>
            <Row>
                <Col md={ 12 } className="text-center my-5">
                    <picture>
                        <source
                            className="aboutLogo"
                            width={ 250 }
                            height={ 215 }
                            srcSet={ acercaDeWebp } 
                        />
                        <Image 
                            alt="Acerca de Nosotros"
                            className="aboutLogo"
                            width={ 250 }
                            height={ 215 }
                            src={ acercaDeJpg } 
                        />
                    </picture>
                </Col>
            </Row>
            <Row>
                <Col md={ 12 } className="my-5 text-center">
                    <h1>Error 404</h1>
                    <h2>Página no encontrada</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default Pagenotfound;