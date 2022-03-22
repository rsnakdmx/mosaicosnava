import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './styles.css';

const Loading = () =>
{
    return(
        <Container fluid>
            <Row>
                <Col md={ 12 }>
                    <Spinner animation="border" className="loading" />
                </Col>
            </Row>
        </Container>
    );
}

export default Loading;