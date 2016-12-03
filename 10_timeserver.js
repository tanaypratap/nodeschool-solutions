var net = require('net')

var server = net.createServer(function (socket) {
	
	date = new Date();	
		
	socket.end(date.getFullYear().toString() 
					+ "-" + (date.getMonth() + 1 ).toString()
					+ "-0" + date.getDate().toString()
					+ " " + date.getHours().toString()
					+ ":" + date.getMinutes().toString());	
	
});

server.listen(process.argv[2]);