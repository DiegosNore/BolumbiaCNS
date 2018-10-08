const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CensoSchema = new Schema({
  nombre: String,
  edad: Number,
  id: Number,
  genero: String,
  direccion: String
});

const censo = mongoose.model('persona', CensoSchema);

module.exports = censo;
