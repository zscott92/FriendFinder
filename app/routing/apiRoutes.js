
var Person = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(Person);
  });


  app.post("/api/friends", function (req, res) {
  
    Person.push(req.body);
  });
}
