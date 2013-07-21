var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
    app.set("view options", { layout: false, pretty: true });
    app.use(express.favicon());
    app.use(express.static(__dirname + '/public'));
}
);

app.get('/', function(request, response) {
    var fs = require('fs');
    var fname = 'index.html';
    var ret = fs.readFileSync(fname, 'utf-8');
    response.send(ret);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});