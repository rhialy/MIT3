var http = require('http')
var port = 1337
var ip = '127.0.0.1' //Ihre IP Adresse hier eintragen oder einfach 127.0.0.1

var projects = [
    {
        title: 'Erstiprojekt',
        description: 'Das war mein erstes Projekt'
    },
    {
        title: 'Simulation',
        description: 'System, Model und Simualtion'
    },
    {
        title: 'Freizeit Bastelei',
        description: 'Solche Dinge mache ich in der Freizeit'
    }
]

//var parseP = JSON.parse(projects);

http.createServer(function (req, res) {
    //header
    //format json and send
}).listen(port, ip);

console.log('Server running at http://' + ip + ':' + port +'/');