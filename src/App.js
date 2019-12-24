import React from 'react';
import './App.css';
import List  from './components/PersonList';

import {Container,Row,Col, Navbar, Nav} from 'react-bootstrap';

class App extends React.Component{
  render(){

    return (
      <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Navbar.Brand href="#home">React Rick And Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Personajes</Nav.Link>
              <Nav.Link href="#pricing">Episodios</Nav.Link>          
            </Nav>
            <Nav>
              <Nav.Link href="https://www.bemtorres.win/">@Bemtorres</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>       
            <List />
          </Row>
        </Container>
      </div>
    );
  }; 
}

export default App;
