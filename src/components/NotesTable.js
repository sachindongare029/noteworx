import React, { Component } from 'react';
import moment from 'moment';
import './../styles/NotesTable.scss';

class NotesTable extends Component {
  render() {
    let { notes } = this.props;
    console.log("props", notes);
    return (
      <div className="notes">
        <table>
          <tbody>
            <tr>
              <th className="buttons-col"></th>
              <th className="title-col">Title</th>
              <th className="content-col">Content</th>
              <th className="date-col">Updated Date</th>
            </tr>
            {notes.map((note, i)=>{
              return (
                <tr key={i}>
                  <td>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </td>
                  <td>{note.title}</td>
                  <td>{note.content}</td>
                  <td>{moment(note.date).format("YYYY-MM-DD hh:mm")}</td>
                </tr>
              );
            })}
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default NotesTable;