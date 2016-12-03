var http = require('http');
var all_data="";

var server = http.createServer(function (request, response){
	
	if (request.method == 'POST') {
		console.log("Received a POST Request");
				
		request.on('data', function(data){
			all_data += data.toString().toUpperCase();
		});
		
		request.on('end', function(){
			response.end(all_data)
		});
		
		
			
			
		
	}
	
	else return response.end('send me a POST\n');
});

server.listen(process.argv[2]);