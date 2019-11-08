import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./../styles/NewNoteModal.scss";

class NewNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      tag: ""
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleSave() {
    let { title, tag, content } = this.state;
    console.log("title, content, tag", title, content, tag);
    // this.props.handleClose();
  }

  handleCancel() {
    this.setState({
      title: "",
      content: "",
      tag: ""
    });
    this.props.handleClose();
  }

  render() {
    let { title, tag, content } = this.state;
    // console.log("title, content, tag", title, content, tag);
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
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={() => this.props.handleClose()}
            ></i>
          </div>
          <div className="modal-input-container">
            <div>Title</div>
            <input
              type="text"
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
            />
            <div>Content</div>
            <textarea
              rows="4"
              onChange={e => {
                this.setState({ content: e.target.value });
              }}
            />
            <div>Tags</div>
            <input
              type="text"
              onChange={e => {
                this.setState({ tag: e.target.value });
              }}
            />
          </div>
          <div className="button-group">
            <Button variant="success" onClick={() => this.handleSave()}>
              <i className="fa fa-floppy-o" aria-hidden="true"></i>
              Save
            </Button>
            <Button variant="danger" onClick={() => this.handleCancel()}>
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
