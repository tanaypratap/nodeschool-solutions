var fs = require('fs');

function noOfLines (filename){
	
	console.log((fs.readFileSync(filename, 'utf8').split('\n').length) - 1);
	}

noOfLines(process.argv[2]);