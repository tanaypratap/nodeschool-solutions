var http = require('http');
var dataFromServer_1 = "";
var dataDone_1 = false;

var dataFromServer_2 = "";
var dataDone_2 = false;

var dataFromServer_3 = "";
var dataDone_3 = false;




	http.get(process.argv[2], function (response){
		
		response.setEncoding('utf8');
		
		response.on('data', function (data){
				
			dataFromServer_1 = dataFromServer_1 + data; 
		}); 
		
		response.on("error", function (error) {
			
			console.log(error);
			dataDone_1 = true;
		
		});
		
		response.on('end', function () {
			
			dataDone_1 = true;
			finalPrint();
		});
	});
	
	
	http.get(process.argv[3], function (response){
		
		response.setEncoding('utf8');
		
		response.on('data', function (data){
				
			dataFromServer_2 = dataFromServer_2 + data; 
		}); 
		
		response.on("error", function (error) {
			
			console.log(error);
			dataDone_2 = true;
		
		});
		
		response.on('end', function () {
			
			dataDone_2 = true;
			finalPrint();
		});
	});
	
	
	http.get(process.argv[4], function (response){
		
		response.setEncoding('utf8');
		
		response.on('data', function (data){
				
			dataFromServer_3 = dataFromServer_3 + data; 
		}); 
		
		response.on("error", function (error) {
			
			console.log(error);
			dataDone_3 = true;
		
		});
		
		response.on('end', function () {
			
			dataDone_3 = true;
			finalPrint();
		});
	});


function finalPrint () { 

	if (dataDone_1&&dataDone_2&&dataDone_3) {
		
		console.log(dataFromServer_1);
		console.log(dataFromServer_2);
		console.log(dataFromServer_3);

	}
}