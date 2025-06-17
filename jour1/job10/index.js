const url = require('url');

const myUrl = new URL("https://www.google.com&search=nodejs");

console.log("Protocole :", myUrl.protocol);
console.log("Nom d'hôte :", myUrl.hostname);
console.log("Paramètres :", myUrl.searchParams.toString());

myUrl.hostname = "www.laplateforme.io";
myUrl.searchParams.set("ref", "chatgpt");

console.log("Nouvelle URL :", myUrl.href);