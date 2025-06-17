const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World !");
});

server.listen(8888, () => {
  console.log("Serveur démarré sur le port 8888");
});