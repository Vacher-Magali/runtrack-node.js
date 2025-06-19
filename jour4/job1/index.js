const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LaPlateforme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connecté à MongoDB");
}).catch(err => {
  console.error("Erreur de connexion :", err);
});