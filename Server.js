var http = require('http');

var app=http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({Name:'Chandra Shekhar',Age:29}));
    
}).listen(process.env.PORT || 8080);

