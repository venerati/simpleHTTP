var http = require('http');
var fs = require('fs');

//404 response
function send404Res(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found");
	response.end();
}

//handles the user request
function onRequest(request, response) {

	if(request.method == 'GET' && request.url == '/') {
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}else{
		send404Res(response);
	}
};

http.createServer(onRequest).listen(8766);
console.log('Server is active');