const Note = require("../models/note.model.js");

// Create and Save a new Note
exports.display = function(req, res) {
  res.send({"hello": "Greetings from the Test controller!"});
};

exports.create = function(req, res) {
  let NoteObj = new Note({
    name: req.body.name,
    price: req.body.price
  });

  NoteObj.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send({"obj": NoteObj});
  });
};

exports.notes = function(req, res) {
  Note.findById(req.params.id, function(err, Note) {
    if (err) return next(err);
    res.send(Note);
  });
};