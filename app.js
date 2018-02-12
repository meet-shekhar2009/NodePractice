
var express=require('express');
var app=express();
var appBaseUrl="/api";

app.get(appBaseUrl+"/",function(req,res){	
	res.send("welcome to my dream app api");
});

app.listen("8080",function(){
	console.log('running on port :'+"8080"); 	
});

