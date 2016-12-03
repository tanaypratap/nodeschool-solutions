


var fs = require('fs');

	
fs.readFile(process.argv[2], 'utf8', doneReading);

function doneReading(err, fileContents) {
	
	console.log(fileContents.split('\n').length - 1 );
}
