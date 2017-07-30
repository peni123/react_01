import React, { Component } from 'react';
import ModalHeader, {Header} from 'react-bootstrap/lib/ModalHeader';
import Modal  from 'react-bootstrap/lib/Modal';
import OverlayTrigger  from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import ModalBody  from 'react-bootstrap/lib/ModalBody';
import ModalTitle  from 'react-bootstrap/lib/ModalTitle';
import ModalFooter  from 'react-bootstrap/lib/ModalFooter';
import InputGroup  from 'react-bootstrap/lib/InputGroup';
import Video from '../components/video';

class ModalItem extends Component{
  constructor(props) {
    super(props)
   this.state = { showModal: false }
  }
  

  close() {
    this.setState({ showModal: false });
  };

  open() {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="modal-item">
        <Button className="btn-modal"
          onClick={this.open.bind(this)}>

          {this.props.buttonName}
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <ModalHeader closeButton>
            <ModalTitle>Modal heading</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <h4>Paste here the link</h4>
           <InputGroup>
             <input></input>
              <Video/>
           </InputGroup>
          </ModalBody>
          <ModalFooter>
            <p>Here shall be the comments</p>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default ModalItem;


