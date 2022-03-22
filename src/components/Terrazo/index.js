import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';

const Terrazo = () =>
{
    const images = 
    [
        {
          original: '/images/7.jpeg',
          thumbnail: '/images/7.jpeg',
        },
        {
          original: '/images/8.jpeg',
          thumbnail: '/images/8.jpeg',
        },
        {
          original: '/images/9.jpeg',
          thumbnail: '/images/9.jpeg',
        },
    ];

    return(
        <Container fluid>
            <Row>
                <Col md={ 12 } className="my-5 text-center">
                    <h1>Terrazos</h1>
                    <ImageGallery items={ images } />
                </Col>
            </Row>
        </Container>
    )
}

export default Terrazo;