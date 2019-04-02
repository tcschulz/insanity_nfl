app.post('/thank', urlencodedParser, function (req, res){
  var reply='';
  reply += "<b>Your favorite team is:</b> "
  res.send(reply);
 });
