const fs = require('fs');

fs.writeFileSync('data.txt', 'Je manipule les fichiers avec un module node !');
console.log('Fichier modifié.');