const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const casaSchema = new Schema({
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
  npersonasaporteeconomico: [Number]
});

const casa = mongoose.model('casa', casaSchema);

module.exports = casa;
