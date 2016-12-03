var http = require('http');
var fs = require('fs');

var portNumber = Number(process.argv[2]);
var fileLocation = process.argv[3];


var server = http.createServer(function(request, response){
	
	var readableStream = fs.createReadStream(fileLocation);
	readableStream.pipe(response);
	
});

server.listen(portNumber);