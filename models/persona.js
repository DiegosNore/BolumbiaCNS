const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
  nombre:String,
  edad:Number,
  genero:String,
  fechanacimiento:String,
  paisnacimiento:String,
  idioma1:String,
  idioma2:String,
  idioma3:String,
  idioma4:String
});
