import React, { Component } from 'react'

class NotesTable extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    console.log("props", this.props.notes);
    return (
      <div>
        hello
      </div>
    )
  }
}

export default NotesTable;