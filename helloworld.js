var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<b>Program</b> <i>Pertama</i> </br><h1><u>Helloworld</u></h1>')
    response.write('<h1 style="color:#3DBBED;">Aidil Abdillah Suyudi</h1>');
    response.end();
}).listen(8000);

console.log("server running on http://localhost:8000");
