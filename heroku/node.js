// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var thesaurus = require("thesaurus");
var word = [];
// var word = "";
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/print', function (req, res) {
  // res.sendfile("./views/index.html");
  // var word = req.word;
  var tmp = req.query.myWord;
  // console.log("req word "+ req.word);
  // console.log("res word "+ res.word);
   res.send(thesaurus.find(tmp) + " get");
});

app.post('/print', function (req, res) {
   
  // console.log("req word "+ req.word);
  // console.log("res word "+ res.word);
  // console.log(tmp);
  word.push(req.query.myWord);
  
   res.send(word + " post");
   
});

// app.post("/print", function (request, response){
//   response.send(thesaurus.find(response.word));
//   console.log(thesaurus.find(response.word));
//   response.end(response.word);
// });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});






