var friendsData = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/survey", function (req, res) {
    res.json(friendsData);
  });
}

app.post("/api/survey", function (req, res) {
  friendsData.push(req.body);
});

