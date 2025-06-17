const fs = require('fs');

fs.readdir('.', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.filter(f => f.isDirectory()).forEach(dir => console.log(dir.name));
});
