var fs = require('fs');

var path = require('path');

function readfile(directory, filter, callback) { 
	
	var filteredList = [];

	fs.readdir(directory, doneListing);
	
	function doneListing(err, list) {
		
		if (err) 
			return callback(err);
	
	filter = "." + filter;
	
	for (var i = 0; i < list.length ; i++) {
		
		if ( path.extname (list[i]) === filter ) {
			
			filteredList.push(list[i]);
			//console.log(list[i]);
		}
	}
	
	return callback(null,filteredList);
}

}



module.exports = readfile;