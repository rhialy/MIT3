var http = require('http');
var port = 1337;
var ip = '127.0.0.1' //Ihre IP Adresse hier eintragen oder einfach 127.0.0.1
var time = new Date().toTimeString();

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.end(time); //Ändern Sie die Antwort in die aktuelle Uhrzeit

}).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port +'/');