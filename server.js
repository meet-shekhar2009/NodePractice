
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');
app.use(cors());

var color="#ffffff";

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
	 
	  if(color=="#ffffff")
	  {
		  color="#F8F9F9";
	  }
	  else{
		  color="#ffffff"
	  }
  io.sockets.emit('hello',{text:data,bgcolor:color});
});
});







