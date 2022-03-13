import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Googlemaps from './Googlemaps';

const Contact = () =>
{
    return(
        <Container fluid>
            <Row>
                <Col md={ 4 }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis turpis in augue viverra venenatis. 
                    Aliquam sit amet ullamcorper ligula, a gravida metus. Phasellus vel libero turpis. Vivamus purus mi, bibendum 
                    quis nibh eu, placerat mollis augue. Sed malesuada suscipit consequat.
                </Col>
                <Col md={ 8 }>
                    <Googlemaps />
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;