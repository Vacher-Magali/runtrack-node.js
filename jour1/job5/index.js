const path = require('path');

console.log("Nom du fichier :", path.basename(__filename));
console.log("Extension :", path.extname(__filename));
console.log("Répertoire parent :", path.dirname(__dirname));