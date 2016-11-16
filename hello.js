// include the mod to start an http server
var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 2114
server.listen(2114);

console.log("Server running at http://127.0.0.1:2114/");
