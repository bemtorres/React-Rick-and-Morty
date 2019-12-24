import React from 'react';
import { Container, Row } from 'react-bootstrap';
import List  from '../components/PersonList';

export default function Home(){
    return(
        <div>
            <Container>
            <Row>       
                <h1 className="text-center">Proyecto creado en React</h1>
            </Row>
            </Container>
        </div>
    );
}