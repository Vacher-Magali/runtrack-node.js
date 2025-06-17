const fs = require('fs');
const url = require('url');

const getTasks = (res) => {
  const data = fs.readFileSync('data.json');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(data);
};

const createTask = (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const newTask = JSON.parse(body);
    const data = JSON.parse(fs.readFileSync('data.json'));
    newTask.id = Date.now();
    data.push(newTask);
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newTask));
  });
};

const updateTask = (req, res, id) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const updates = JSON.parse(body);
    const data = JSON.parse(fs.readFileSync('data.json'));
    const index = data.findIndex(t => t.id == id);
    if (index === -1) {
      res.writeHead(404);
      res.end("Tâche non trouvée");
      return;
    }
    data[index] = { ...data[index], ...updates };
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data[index]));
  });
};

const deleteTask = (res, id) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  const newData = data.filter(t => t.id != id);
  fs.writeFileSync('data.json', JSON.stringify(newData, null, 2));
  res.writeHead(200);
  res.end("Tâche supprimée");
};

const routes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const id = parsedUrl.pathname.split('/')[2];

  if (req.url === '/tasks' && req.method === 'GET') {
    getTasks(res);
  } else if (req.url === '/tasks' && req.method === 'POST') {
    createTask(req, res);
  } else if (req.url.startsWith('/tasks/') && req.method === 'PUT') {
    updateTask(req, res, id);
  } else if (req.url.startsWith('/tasks/') && req.method === 'DELETE') {
    deleteTask(res, id);
  } else {
    res.writeHead(404);
    res.end("Route non trouvée");
  }
};

module.exports = routes;
