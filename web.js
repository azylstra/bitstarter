var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {
    var fs = require('fs');
    var fname = 'index.html';
    var ret = fs.readFileSync(fname, 'utf-8');
    response.send(ret);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});