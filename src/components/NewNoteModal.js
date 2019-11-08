import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import './../styles/NewNoteModal.scss';

class NewNoteModal extends Component {
	// constructor(props) {
	// 	super(props);
	// }

  render() {
    return (
      <Modal show={this.props.show} className="new-note-modal">
        <Modal.Body>
				Woohoo, you're reading this text in a modal!
				<div className="button-group">
					<Button variant="success" onClick={() => this.props.handleClose()}>
            Save
          </Button>
          <Button variant="danger" onClick={() =>this.props.handleClose()}>
            Cancel
          </Button>
				</div>
				</Modal.Body>
      </Modal>
    );
  }
}

export default NewNoteModal;
