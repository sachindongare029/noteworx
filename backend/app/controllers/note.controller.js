const Note = require("../models/note.model.js");

// Create and Save a new Note
exports.display = function(req, res) {
  Note.find(function(err, Note) {
    if (err) return (err);
    res.send(Note);
  });
};

exports.create = function(req, res) {
  let NoteObj = new Note({
    title: req.body.title,
    content: req.body.content,
    tag: req.body.tag,
    date: req.body.date
  });

  NoteObj.save(function(err) {
    if (err) {
      return (err);
    }
    res.send({"obj": NoteObj});
  });
};

exports.notes = function(req, res) {
  Note.findById(req.params.id, function(err, Note) {
    if (err) return (err);
    res.send(Note);
  });
};