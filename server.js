
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

  app.get("/friends.js", function (req, res) {
    return res.json(newPerson);
  });

  
  app.post("/api/friends", function (req, res) {
    var newPerson = req.body;
  
    console.log(newPerson);
  
    // We then add the json the user sent to the character array
    characters.push(newPerson);
  
    // We then display the JSON to the users
    res.json(newPerson);
  });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
