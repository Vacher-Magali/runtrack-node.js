const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) throw err;
  let result = '';
  for (let i = 0; i < data.length; i += 2) {
    result += data[i];
  }
  console.log(result);
});