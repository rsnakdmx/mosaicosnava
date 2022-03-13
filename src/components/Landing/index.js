import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import Uno from '../../assets/mozaico1.jpg';
import Dos from '../../assets/mozaico2.jpg';
import Tres from '../../assets/mozaico3.jpg';

const Landing = () =>
{
    return(
        <Container fluid>
            <Carousel>
                <div>
                    <img loading="lazy" src={ Uno } />
                    <p className="legend">Texto</p>
                </div>
                <div>
                    <img loading="lazy" src={ Dos } />
                    <p className="legend">Texto</p>
                </div>
                <div>
                    <img loading="lazy" src={ Tres } />
                    <p className="legend">Texto</p>
                </div>
            </Carousel>
            <Row>
                <Col md={ 6 }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis turpis in augue viverra venenatis. 
                    Aliquam sit amet ullamcorper ligula, a gravida metus. Phasellus vel libero turpis. Vivamus purus mi, bibendum 
                    quis nibh eu, placerat mollis augue. Sed malesuada suscipit consequat.
                </Col>
                <Col md={ 6 }>
                    Curabitur condimentum tristique eros vitae vulputate. Duis auctor turpis vitae suscipit hendrerit. Fusce id dui id 
                    ex semper facilisis. Aliquam maximus vehicula nisl, vel iaculis tortor viverra quis. 
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;