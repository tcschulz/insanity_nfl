var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var prompt = require('prompt');


// http://localhost:8082/form 
// Running Server Details.
var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});
 
 
app.get('/form', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/thank'  method='post' name='form1'>";
  html += "<b><font size= 25 color=blue>Insanity NFL</font><b></p>";
  html += "Favorite NFC North Team:</p><input type= 'text' name='team'></p>";
  html += "Favorite NFC North Player:</p><input type='text' name='player'></p>";
  html += "Do you like Brett Favre? </p><input type='text' name='favre'></p>";
  html += "Do you think Aaron Roggers is better than Brett Favre?</p><input type='text' name='arod'></p>";
  html += "<img src = https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/d/18/d1808247-1af1-5b2a-bd8e-ad93d83d1af8/5b2ec4d7f0e1e.image.jpg?resize=400%2C407 /></p>"
  html += "<input type='submit' value='Submit'></p>";
  html += "<INPUT type='reset'  value='Reset'></p>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "<b>Your favorite team is:</b> " + req.body.team +"</p>";
  reply += "<b>Your favorite player is:</b> " + req.body.player+"</p>"; 
  reply += "<b>Do you like Brett Favre?</b> " + req.body.favre+"</p>";
  reply += "<b>Do you think Aaron Rodgers is better than Brett Favre? </b>" + req.body.arod;
  res.send(reply);
 });
