import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';

class Description extends React.Component{
    constructor(props){
        super();
        this.state = {
            Modal : false,       
            
        } 
       
    }
  

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    
    
    render(){
      
        console.log(this.props);

 
        return(
            <div>
            <Button variant="success" onClick={this.toggle}>Ver Personaje</Button>
            
            <Modal.Dialog>
                <Modal.Header closeButton>
                <Modal.Title>{ this.props.props.name }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table>
                        
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>
        );
    }

}

export default Description;