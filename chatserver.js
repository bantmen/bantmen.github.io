var net = require('net'),
	chatServer = net.createServer(),
	clientList = [];
	
chatServer.on('connection', function(client) {

	client.name = client.remoteAddress + ":" + client.remotePort;
	client.write('Welcome to my chatserver ' + client.name);
	
	clientList.push(client);
	
	client.on('data', function(data){
			broadcast(data, client);
		}
	);
	
	client.on('end', function(){
		clientList.splice(clientList.indexOf(client),1);
	});
	
	client.on('error', function(e){
		console.log(e);
	});
	
});

function broadcast(message, client){
	for(var i=0;i<clientList.length;i=i+1) {
		if (client !== clientList[i] && clientList[i].writable) {
			clientList[i].write(client.name + " says " + message);
		}
	}
}

chatServer.listen(5000);
console.log("Listening on port: 5000");