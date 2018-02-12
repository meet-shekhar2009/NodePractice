
//var express=require('express');
//var app = express();
//var appBaseUrl = "/api";
var port = process.env.PORT|| 8080;
//app.get(appBaseUrl+"/",function(req,res){	
//	res.send("welcome to my dream app api");
//});
//
//app.listen(port,function(){
//	console.log('running on port :'+port); 	
//});
//

var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(port);



