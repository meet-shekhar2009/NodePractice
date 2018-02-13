
var express=require('express');
var app = express();
var appBaseUrl = "/api";
var port = process.env.PORT|| 8080;
app.get(appBaseUrl+"/",function(req,res){	
	res.send("<h2>welcome to my dream app api</h2>");
});

app.listen(port,function(){
console.log('running on port :'+port); 	
});






