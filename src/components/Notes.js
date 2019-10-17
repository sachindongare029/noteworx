import React, { Component } from 'react';
import '../styles/Notes.scss';

class Notes extends Component {
  render() {
    return (
      <div className="notes-container">
        <div className="notes__input-container">
          <button className="add--btn">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
          <input type="text" placeholder="Search for note by title ..." />
          <button className="search--btn">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="notes__result-container">
          No notes till..
        </div>
      </div>
    );
  }
}

export default Notes;