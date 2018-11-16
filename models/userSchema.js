const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email :{type: String , required:true},
  contraseña: {type: String , required:true},
  cedula:{type:Number, required:true}
});

const User = mongoose.model('User',userSchema);

module.exports = User;
