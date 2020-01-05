import React from 'react';
import {Button,Col,Card} from 'react-bootstrap';
import './Character.css';
import Description from '../Description';

class Character extends React.Component{
    
    render(){
        
        // console.log(this.props);
        return(
            <Col md={3}>
                <Card>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        {/* <Card.Text>Descripcion</Card.Text> */}
                        <Description props={this.props.Props} />
                    </Card.Body>
                </Card>   
            </Col>      
        )
    }
}

export default Character;
