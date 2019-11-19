var express = require("express");
const router = express.Router();
const note = require("../controllers/note.controller.js");

router.post("/create", note.create);
router.get("/notes", note.display);
router.get("/:id", note.notes);
router.put("/update/:id", note.update);
router.delete("/delete/:id", note.delete);

module.exports = router;