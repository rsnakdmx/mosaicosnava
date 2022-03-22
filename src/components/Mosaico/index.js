import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';

const Mosaico = () =>
{
    const images = 
    [
        {
          original: '/images/4.jpeg',
          thumbnail: '/images/4.jpeg',
        },
        {
          original: '/images/5.jpeg',
          thumbnail: '/images/5.jpeg',
        },
        {
          original: '/images/6.jpeg',
          thumbnail: '/images/6.jpeg',
        },
    ];

    return(
        <Container fluid>
            <Row>
                <Col md={ 12 } className="my-5 text-center">
                    <h1>Mosaicos</h1>
                    <ImageGallery items={ images } />
                </Col>
            </Row>
        </Container>
    );
}

export default Mosaico;