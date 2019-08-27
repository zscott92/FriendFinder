
var friendsData = require("../data/friendsData");

module.exports = function (app) {
  app.get("/app/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {

    friendsData.push(req.body);

    res.json(true);

  });

};