const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    name: {type: String},
    price: {type: Number}
});

module.exports = mongoose.model("Note", NoteSchema);
