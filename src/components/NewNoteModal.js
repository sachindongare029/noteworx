import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class NewNoteModal extends Component {
	// constructor(props) {
	// 	super(props);
	// }

  render() {
    return (
      <Modal show={this.props.show} onHide={() => this.props.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => this.props.handleClose()}>
            Save
          </Button>
          <Button variant="danger" onClick={() =>this.props.handleClose()}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewNoteModal;
