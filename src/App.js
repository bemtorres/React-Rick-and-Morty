import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Personajes from './pages/Personajes';
import Episodio from './pages/Episode';

import {Navbar, Nav, Button} from 'react-bootstrap';


class App extends React.Component{
  render(){

    return (
      <div className="App">        
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand><Link to="/"> <Button>React Rick And Morty</Button></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/">
                  <Button>Personajes</Button>
                </Link>
                <Link to="/episodios">
                  <Button>Episodios</Button>
                  {/* <Nav.Link>Episodios</Nav.Link>      */}
                </Link>                     
              </Nav>
              <Nav>
                <Nav.Link href="https://www.bemtorres.win/">@Bemtorres</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/">
              <Personajes />
            </Route>
            <Route path="/episodios">
              <Episodio />
            </Route>
          </Switch>
        </Router>     
      </div>
    );
  }; 
}

export default App;
