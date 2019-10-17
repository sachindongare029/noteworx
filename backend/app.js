var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var app = express();

var port = 3001;
var url = "mongodb://localhost:27017/noteWorx";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
