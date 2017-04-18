var http = require('http');
var bl = require('bl');
var net = require('net');
var fs = require('fs');
var map = require('through2-map');

/*var results = [];

for (let i = 2; i < 5; i++) {
    var url = process.argv[i];
    
    http.get(url, function (response) {
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
        if(err){
            console.log("hiba");
            return;
        }

        results.push(data.toString());

        if(results.length == 3){
            for (var j = 0; j < results.length; j++) {
                var element = results[j];
                console.log(element);
            }
        }
    }))
});
}*/

/*function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

var server = net.createServer(function (socket) {
    var current = new Date();
    var result = `${current.getFullYear()}-${pad(current.getMonth()+1)}-${pad(current.getDate())} ${pad(current.getHours())}:${pad(current.getMinutes())}\n`;
    console.log(result);
    socket.end(result);
    
})
server.listen(process.argv[2]);*/

/*var fileStream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (request, response){
    response.writeHead(200, { 'content-type': 'text/plain' })
    fileStream.pipe(response);
});
server.listen(process.argv[2]);*/

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server.listen(process.argv[2]);





