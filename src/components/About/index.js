import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const About = () =>
{
    return(
        <Container>
            <Row>
                <Col md={ 12 } className="text-center my-5">
                    <h1>¿Quienes somos?</h1>
                </Col>
            </Row>
            <Row>
                <Col md={ 12 } className="my-5">
                    <p>
                        Somos fabricantes desde 1934. Se inicio con la generación del Sr <strong>Cornelio Nava</strong> el cúal 
                        fue uno de los primeros mosaiqueros de la CDMX. Junto con él su ahijado el Sr 
                        <strong>Leonardo Palma Rivera</strong>. Ambos ya habian trabajado para los dueños españoles de las 
                        fabricas de modernas, <strong>Quintana</strong> y <strong>Puente</strong>.
                    </p>
                    <p>
                        La experiencia y el paso del tiempo le permitio al Sr. Leonardo independizarse creando su propio taller en el 
                        año de 1934 con el nombre de <strong>Mosaicos Nava</strong>, mismo que ha pasado de generación en generación 
                        manteniendo la execelente calidad, durabilidad y procurando siempre la completa satisfacción de nuestros 
                        clientes.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;