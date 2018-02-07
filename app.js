// content of index.js
process.stdout.write('\u001B[2J\u001B[0;0f');
const http = require('net')
const port = 3000

//const requestHandler = (request, response) => {
//  console.log(request.url)
//  response.end('Hello Node.js Server!')
//}
var iCounter = 1;
let sockets = {};
const server = http.createServer()

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
server.on('connection', (socket) => {
    socket.id = iCounter++;
    sockets[socket.id] = socket;
    console.log('Client Connected');
    socket.write('Welecom new client!\r\n');

    socket.on('data', data=> {
        //console.log(socket);
        for (var prop in sockets) {
            var cs = sockets[prop];
            cs.write(socket.id + ': ' + data + '\n\r');
        }
        //Object.entries(sockets).foreach((cs)=>{
        //    cs.write(socket.id + ': ' + data + '\n\r');
        //});
        
    });
    socket.on('end', () => {
        console.log('Client is disconnected now');
    });
});
