const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LaPlateforme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connecté à MongoDB"))
  .catch(err => console.error(err));


const studentSchema = new mongoose.Schema({
  id: Number,
  lastname: String,
  firstname: String,
  students_number: Number,
  year_id: mongoose.Schema.Types.ObjectId 
});

const Student = mongoose.model('Student', studentSchema, 'student');


const students = [
  { id: 1, lastname: 'LeBricoleur', firstname: 'Bob', students_number: 1001 },
  { id: 2, lastname: 'Doe', firstname: 'John', students_number: 1002 },
  { id: 3, lastname: 'Dupont', firstname: 'Marine', students_number: 1003 },
];

Student.insertMany(students)
  .then(() => console.log("Étudiants ajoutés"))
  .catch(err => console.error(err));
