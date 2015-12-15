var http = require('http')
var port = 1337
var ip = '127.0.0.1' //Ihre IP Adresse hier eintragen oder einfach 127.0.0.1

    var projects = '{ "projects" : [' +
    '{ "title": "Erstiprojekt", "description" : "Das war mein erstes Projekt"},' +
    '{ "title": "Simulation", "description" : "System, Model und Simualtion"},' +
    '{ "title": "Freizeit Bastelei", "description" : "Solche Dinge mache ich in der Freizeit"} ]}';

var projectsObj = JSON.parse(projects);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.end(projects);
}).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port +'/');