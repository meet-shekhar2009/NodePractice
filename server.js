
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');
app.use(cors());


var appBaseUrl = "/";
var port = process.env.PORT|| 8080;
app.get(appBaseUrl+"/",function(req,res){	
	res.sendFile(__dirname+'/index.html');
});

server.listen(port,function(){
console.log('running on port :'+port); 	
});
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('hello', function(data){
  io.sockets.emit('hello',data);
});
});







