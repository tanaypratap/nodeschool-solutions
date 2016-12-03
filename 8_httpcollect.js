var http = require('http');
var dataFromServer = "";




	http.get(process.argv[2], function (response){
		
		response.setEncoding('utf8');
		
		response.on('data', function (data){
				
			dataFromServer_1 = dataFromServer_1 + data; 
		}); 
		
		response.on("error", function (error) {
			
			console.log(error);
			
		
		});
		
		response.on('end', function () {
			
			console.log(dataFromServer);
		});
	});
	
	