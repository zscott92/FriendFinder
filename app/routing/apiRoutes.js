
var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body.questions);

    let person = req.body;
    let closestMatch = 0;

    for (let i = 0; i < friends.length; i++) {
      let sumVariance = 0;
      for (let y = 0; y < friends[i].questions.length; y++) {
        let variance = Math.abs(parseInt(person.scores[y]) - parseInt(friends[i].questions[y]));
        sumVariance += variance;
      }
      person.matchScoreWithFriend = [match[i], sumVariance];


      if (friends[i].length == 1) {
        alert("no users in database");
      }

      else if (person.matchScoreWithFriend.match[i + 1] < person.matchScoreWithFriend.match[i]) {
        closestMatch = friends[i + 1];
        console.log(closestMatch.name);
        console.log(closestMatch.matchScoreWithFriend);
      }

      else {
        closestMatch = friends[i];
        console.log(closestMatch.name);
        console.log(closestMatch.matchScoreWithFriend);
      }
    }

    friends.push(person);
    res.json(friends[i]);
  });
};
