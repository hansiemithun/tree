var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, '');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', express.static(public));

const port = process.env.port || 8080;

app.listen(port, function() {
  console.log('app running in port: ' + port);
});
