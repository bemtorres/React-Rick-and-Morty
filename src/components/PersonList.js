import React from 'react';

import axios from 'axios';
import Character from './character/Character';
import { Col, CardGroup } from 'react-bootstrap';

export default class PersonList extends React.Component {
  constructor(){
    super();
    this.state = {
      persons: []
    };
  }

  // state = {
  //   persons: []
  // }

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results);
        const persons = res.data.results;
        this.setState({ persons });
      })
  }

  render() {
    const arrayCharacters = this.state.persons.map(
      (persons, i ) => {
        console.log(i);
        return(
          <Character
            key = {i}
            img={persons.image}
            name={persons.name}
            garden={persons.garden}
          />
        );
      }
    );
    return (
      <CardGroup>
        { arrayCharacters }
      </CardGroup>       
    )
  }
}