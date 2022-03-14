import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const Loading = () =>
{
    return(
        <Container fluid>
            <Row>
                <Col md={ 12 }>
                    <Spinner variant="border" />
                </Col>
            </Row>
        </Container>
    );
}

export default Loading;