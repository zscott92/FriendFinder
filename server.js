var express = require("express");
var fs = require("fs");
var app = express();
var PORT = process.env.PORT || 3000;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

  switch (path) {

    case "/survey":
      return fs.readFile(__dirname + "/survey.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    default:
      return fs.readFile(__dirname + "/index.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
  }
}
  server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });
