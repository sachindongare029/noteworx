import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import './../styles/NewNoteModal.scss';

class NewNoteModal extends Component {
	// constructor(props) {
	// 	super(props);
	// }

  render() {
    return (
      <Modal
        show={this.props.show}
        className="new-note-modal"
        onHide={() => this.props.handleClose()}
      >
        <Modal.Body>
          <div className="modal_header">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
            <span className="modal_title">New Note</span>
            <i className="fa fa-times" aria-hidden="true" onClick={() => this.props.handleClose()}></i>
          </div>
          <div className="modal-input-container">
            <div>Title</div>
            <input type="text" />
            <div>Content</div>
            <textarea rows="4" />
            <div>Tags</div>
            <input type="text" />
          </div>
				<div className="button-group">
					<Button variant="success" onClick={() => this.props.handleClose()}>
              <i className="fa fa-floppy-o" aria-hidden="true"></i>
              Save
          </Button>
          <Button variant="danger" onClick={() =>this.props.handleClose()}>
            <i className="fa fa-times" aria-hidden="true"></i>
            Cancel
          </Button>
				</div>
				</Modal.Body>
      </Modal>
    );
  }
}

export default NewNoteModal;
