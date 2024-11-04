var http = require('http');

http.createServer(function(req, res){
    res.end("Oi! O Servidor foi configurado corretamente!")
}).listen(2024);

console.log("Servidor iniciado!")