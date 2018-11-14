const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
  nombre: String,
  apellido: String,
  genero: String,
  fechanacimiento: String,
  documento: String,
  fechaexpediciondocumento: String,
  lugarexpedicion: String,
  niveleducativo: String,
  estadocivil: String,
  profesion: String,
  grupoetnico: String,
  religion: String,
  sectortrabajo: String,
  horastrabajadassemanales: Number,
  salariomensual: Number,
  celular: Number,
  correo: String,
  paisnacimiento: String,
  departamentonacimiento: String,
  ciudadnacimiento: String,
  nacionalidad: String,
  sisben: String,
  eps: String,
  discapacidad: String,
  tiempovividoensuactualcasa: Number,
  hijos: Number

});


const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;
