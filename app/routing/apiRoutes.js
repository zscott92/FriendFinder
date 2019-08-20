
var server = http.createServer(handleRequest);


var app = express();
var PORT = 3000;

app.get("/api/friends", function (req, res) {
    res("api/friends");
});
  
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });