import React from 'react';
import { Container, Row } from 'react-bootstrap';
import List  from '../components/PersonList';

export default function Personajes(){
    return(
        <div>
            <Container>
            <Row>       
                <List />
            </Row>
            </Container>
        </div>
    );
}