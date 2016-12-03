
var module = require('./6_module');


function main () {
	
	module(process.argv[2], process.argv[3], printList);
	
	function printList(err, list) {
		
		list.forEach (function (file) {
			console.log(file);
		});
	}
}


	
main();

