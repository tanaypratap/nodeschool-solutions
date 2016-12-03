var fs = require('fs');

var path = require('path');

fs.readdir(process.argv[2], doneListing);

function doneListing(err, list) {
	
	var filter = "." + process.argv[3];
	
	for (var i = 0; i < list.length ; i++) {
		
		if ( path.extname (list[i]) === filter ) {
			
			console.log(list[i]);
		}
	}
}