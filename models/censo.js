const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CensoSchema = new Schema({
  nombre: String,
  genero: String,
  fechanacimiento: Date,
  direccion: String,
  tiempovividolugar:Number,
  
});

const censo = mongoose.model('censo', CensoSchema);

module.exports = censo;
