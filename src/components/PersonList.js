import React from 'react';

import axios from 'axios';
import Character from './character/Character';
import { CardGroup } from 'react-bootstrap';

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
    axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results);
        
        // console.log(res.data.results);
        // 1.- como se llama igual se sobre escribe asi mismo  
        const persons = res.data.results;
        this.setState({ persons });

        // 2 .- 
        // const pers = res.data.results;
        // this.setState({persons: pers})        
      }).catch(err => {
        console.error("el error es" + err);
      })
  }

  render() {

    const arrayCharacters = this.state.persons.map(
      (persons, i ) => {
        // console.log(i);
        return(
          <Character
            key = {i}
            img={persons.image}
            name={persons.name}
            garden={persons.garden}
            Props={persons} 
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