// Read the port from the underlying environment.
// If not exist, use the default port: 8080
var port = process.env.VCAP_APP_PORT || 8080;
// Create the server and listen to requests on the specified port.
http.createServer(function (request, response) {
}).listen(port);