import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

class Description extends React.Component{
    constructor(props){
        super();
        this.state = {
            Modal : false     
            
        } 
       
    }
  
    toggle(){
        this.setState(prevState => ({
           
            show: !prevState.show,
        }));
    }

    
    
    render(){
      
        console.log(this.props);

 
        return(
            <div>
            <Button variant="success" onClick={this.toggle}>Ver Personaje</Button>
         
            {/* <Modal show="false"  onHide="false" animation="false">
                <Modal.Header closeButton>
                <Modal.Title>{ this.props.props.name }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table responsive>
                    <tbody>
                        <tr>
                            <td><strong>Status: </strong>{ this.props.props.status }</td>
                        </tr>
                        <tr>
                            <td><strong>Species: </strong>{ this.props.props.species }</td>
                        </tr>
                        
                        <tr>
                            <td><strong>Type: </strong>{ this.props.props.type }</td>
                        </tr>
                        <tr>
                            <td><strong>garden: </strong>{ this.props.props.garder }</td>
                        </tr>
                        <tr>
                            <td><strong>Location: </strong>{ this.props.props.location.name }</td>
                        </tr>
                    </tbody>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal> */}
            </div>
        );
    }

}

export default Description;