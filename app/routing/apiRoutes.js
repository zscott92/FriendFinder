
var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    let person = req.body;
    let closestMatch = 0;

    for (let i = 0; i < friends.length; i++) {
      let sum = 0;
      for (let y = 0; y < friends[i].scores.length; y++) {
        let variance = Math.abs(parseInt(person.scores[y]) - friends[i].scores[y]);
        sum += variance;
      }
      let matchScoreWithFriend = [];
      matchScoreWithFriend[i] = sum;
      person.attr(matchScoreWithFriend);

      person.matchScoreWithFriend[i] = sum;
      console.log(person.matchScoreWithFriend[i]);

      if (friends[i].length == 1) {
        alert("no users in database");
      }

      else if (person.matchScoreWithFriend[i + 1] < person.matchScoreWithFriend[i]) {
        closestMatch = friends[i + 1];
        console.log(closestMatch.name);
        console.log(closestMatch.matchScoreWithFriend);
      }

      else {
        closestMatch = friends[i];
      }
    }


    friends.push(person);
    res.json(friends[i]);
  });
};
