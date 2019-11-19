import React, { Component } from "react";
import moment from "moment";
import "./../styles/NotesTable.scss";

class NotesTable extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  handleDelete(id) {
    fetch("http://localhost:3001/delete/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    }).then(
      () => {
        this.props.handleDelete(true);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  handleMouseEnter(e) {
    var node = e.target.closest("tr");
    node.classList.add("row-hovered");
  }
  onMouseLeave(e) {
    var node = e.target.closest("tr");
    node.classList.remove("row-hovered");
  }

  render() {
    let { notes } = this.props;
    // console.log("props", notes);
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
            {notes.map((note, i) => {
              return (
                <tr key={i}>
                  <td>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    <i
                      className="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => this.handleDelete(note._id)}
                      onMouseEnter={e => this.handleMouseEnter(e)}
                      onMouseLeave={e => this.onMouseLeave(e)}
                    ></i>
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
