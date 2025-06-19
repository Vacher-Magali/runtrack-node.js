const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://localhost:27017/LaPlateforme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("✅ Connecté à MongoDB");

  const years = await createYears();
  await createStudents(years);

  mongoose.connection.close(); 
}).catch(err => console.error("❌ Erreur de connexion :", err));


const yearSchema = new Schema({
  year: String
});
const Year = mongoose.model('Year', yearSchema, 'year'); 


const studentSchema = new Schema({
  id: Number,
  lastname: String,
  firstname: String,
  students_number: Number,
  year_id: { type: Schema.Types.ObjectId, ref: 'Year' } 
});
const Student = mongoose.model('Student', studentSchema, 'student'); 


async function createYears() {
  await Year.deleteMany(); 

  const years = await Year.insertMany([
    { year: "Bachelor 1" },
    { year: "Bachelor 2" },
    { year: "Bachelor 3" }
  ]);

  console.log("✅ Cursus créés");
  return years;
}


async function createStudents(years) {
  await Student.deleteMany();

  const students = [
    {
      id: 1,
      lastname: "LeBricoleur",
      firstname: "Bob",
      students_number: 101,
      year_id: years[0]._id
    },
    {
      id: 2,
      lastname: "Doe",
      firstname: "John",
      students_number: 102,
      year_id: years[1]._id
    },
    {
      id: 3,
      lastname: "Dupont",
      firstname: "Marine",
      students_number: 103,
      year_id: years[2]._id
    }
  ];

  await Student.insertMany(students);
  console.log("✅ Étudiants avec cursus ajoutés");
}