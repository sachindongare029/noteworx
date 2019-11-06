var express = require("express");
const router = express.Router();
const note = require("../controllers/note.controller.js");

router.get("/notes", note.display);
router.post("/create", note.create);
router.get("/:id", note.notes);

module.exports = router;