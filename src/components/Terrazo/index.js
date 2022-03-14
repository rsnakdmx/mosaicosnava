import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Terrazo = () =>
{
    return(
        <Container fluid>
            <Row>
                <Col md={ 12 } className="my-5 text-center">
                    <h1>Terrazos</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Terrazo;