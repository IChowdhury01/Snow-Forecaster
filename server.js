// init project
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/fetch.html", function (request, response) {
  response.sendFile(__dirname + '/views/fetch.html');
});


app.get("/centered-list.html", function (request, response) {
  response.sendFile(__dirname + '/views/centered-list.html');
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('App is listening on port ' + listener.address().port);
});