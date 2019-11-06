import React, { Component } from 'react';
import './../styles/NotesTable.scss';

class NotesTable extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    console.log("props", this.props.notes);
    return (
      <div className="notes">
        <table>
          <th>
            <td></td>
            <td>Title</td>
            <td>Content</td>
          </th>
          <tr>
            <td></td>
            <td>
              hiii
            </td>
            <td>
              hello
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default NotesTable;