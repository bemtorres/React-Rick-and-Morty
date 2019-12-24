import React from 'react';
import {Button,Col,Card} from 'react-bootstrap';
import './Character.css';

class Character extends React.Component{
    render(){
        return(
            <Col md={3}>
                <Card>
                    <Card.Img rounded  variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        {/* <Card.Text>Descripcion</Card.Text> */}
                        <Button variant="success" size="sm" block>Ver</Button>
                    </Card.Body>
                </Card>   
            </Col>      
        )
    }
}

export default Character;
