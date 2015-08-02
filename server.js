var http = require('http');

function onRequest(request, response) {
	console.log('the user has made a request' + request.url);
	response.writeHead(200, {"context-Type": "text/plain"});
	response.write("here is some data");
	response.end();
};

http.createServer(onRequest).listen(8765);
console.log('Server is active');