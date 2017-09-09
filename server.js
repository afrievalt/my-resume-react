var express = require('express');
var request = require('request');
var app = express();

app.get("/", function (getRequest, getResponse) {
  request("https://very-new.firebaseio.com/employmentHistory.json", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      getResponse.send(body);
    } else {
      getResponse.status(500)
      getResponse.send("something went wrong");}
  })
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
