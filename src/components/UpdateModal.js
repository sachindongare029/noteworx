import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/UpdateModal.scss";

class UpdateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevItem: []
    }
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleCancel() {
    this.props.callback();
  }

  render() {
    let { updateItem, show } = this.props;
    return (
      <Modal
        show={show}
        className="update-item-modal"
        onHide={() => this.props.callback()}
      >
        <Modal.Body>
          <div className="modal_header">
            <i className="fa fa-file-text-o" aria-hidden="true"></i>
            <span className="modal_title">Update Note</span>
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => this.handleCancel()}
            ></i>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default UpdateModal;