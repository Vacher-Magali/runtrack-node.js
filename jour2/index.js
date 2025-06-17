const createServer = require('./server');
const routes = require('./routes');

const server = createServer(routes);

server.listen(3000, () => {
  console.log("Serveur API lancé sur le port 3000");
});
