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
  hijos: Number,
  direccion: String,
  materialparedes: String,
  materialpiso: String,
  tipovivienda: String,
  propiaalquilada: String,
  numerohabitaciones: Number,
  numerobaños: Number,
  numerohabitantes: String,
  estrato: Number,
  barrio: String,
  valorarriendoadminstracion: Number,
  servicios: [String],
  npersonasaporteeconomico: Number

});


const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;
