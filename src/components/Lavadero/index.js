import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';

const Lavadero = () =>
{
    const images = 
    [
        {
          original: '/images/1.jpeg',
          thumbnail: '/images/1.jpeg',
        },
        {
          original: '/images/2.jpeg',
          thumbnail: '/images/2.jpeg',
        },
        {
          original: '/images/3.jpeg',
          thumbnail: '/images/3.jpeg',
        },
    ];

    return(
        <Container>
            <Row>
                <Col md={ 12 } className="my-5 text-center">
                    <h1>Lavaderos</h1>
                    <ImageGallery items={ images } />
                </Col>
            </Row>
        </Container>
    );
}

export default Lavadero;