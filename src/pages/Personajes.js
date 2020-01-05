import React from 'react';
import { Container, Row } from 'react-bootstrap';
import List  from '../components/PersonList';

export default function Personajes(){
    return(
        <div>
            <Container>
                <hr />
                <h5>Personajes Rick And Morty</h5>
                <hr />
            <Row>       
                <List />
            </Row>
            </Container>
        </div>
    );
}