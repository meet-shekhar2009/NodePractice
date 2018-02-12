
var express=require('express');
var app=express();
var appBaseUrl="/api";
var port=process.env.PORT|| 8080;
app.get(appBaseUrl+"/",function(req,res){	
	res.send("welcome to my dream app api");
});

app.listen(port,function(){
	console.log('running on port :'+port); 	
});

