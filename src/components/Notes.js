import React, { Component } from 'react';
import '../styles/Notes.scss';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      error: ""
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    let {isLoaded, items, error} = this.state;
    console.log("items", items);
    return (
      <div className="notes-container">
        <div className="notes__input-container">
          <button className="add--btn">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <input type="text" placeholder="Search for note by title ..." />
          <button className="search--btn">
            <i className="fa fa-search" aria-hidden="true"></i>
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