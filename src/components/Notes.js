import React, { Component } from 'react';
import NotesTable from './NotesTable';
import NewNoteModal from './NewNoteModal';
import '../styles/Notes.scss';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      newNoteModal: false,
      newNoteSaved: false
    };
    this.showNewNoteModal = this.showNewNoteModal.bind(this);
    this.hideNewNoteModal = this.hideNewNoteModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  componentDidMount() {
    this.loadNotes();
  }
  loadNotes() {
    fetch("http://localhost:3001/notes")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result,
            newNoteSaved: false
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            newNoteSaved: false,
            error
          });
        }
      );
  }
  showNewNoteModal() {
    this.setState({ newNoteModal: true });
  }
  hideNewNoteModal() {
    this.setState({ newNoteModal: false });
  }
  handleSave(saveFlag) {
    if(saveFlag) {
      this.setState({
        newNoteSaved: true
      });
    }
    this.setState({ newNoteModal: false });
  }

  render() {
    let { newNoteSaved } = this.state;
    if(newNoteSaved) {
      this.loadNotes();
    }
    let { isLoaded, items, error } = this.state;
    return (
      <div className="notes-container">
        <div className="notes__input-container">
          <button className="add--btn" onClick={() => this.showNewNoteModal()}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <input type="text" placeholder="Search for note by title ..." />
          <button className="search--btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="notes__result-container">
          {error ? (
            "Server Not Responding... Try again later.."
          ) : !isLoaded ? (
            "Loading..."
          ) : (
            <NotesTable notes={items} />
          )}
        </div>
        <NewNoteModal
          show={this.state.newNoteModal}
          handleClose={() => this.hideNewNoteModal()}
          handleSave={(saved) => this.handleSave(saved)}
        />
      </div>
    );
  }
}

export default Notes;