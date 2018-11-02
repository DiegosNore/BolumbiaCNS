const assert = require('assert');
const censo = require('../models/censo');

describe('Finding records', function() {
  var per;
  beforeEach(function(done){
    per = new censo({
      nombre: 'Mario',
      genero: 'Hombre',
      direccion: 'cll 12 # 39-290'
    });

    per.save().then(function() {
      done();
    });
  });


  //Create test
  it('Find 1 record from the DB', function(done) {

    persona.findOne({nombre:'Mario'}).then(function(result){
      assert(result.nombre==='Mario');
      done();
    });

  });

  it('Finding one record by ID from the DB',function(done){
    persona.findOne({_id:per._id}).then(function(result){
      assert(result._id.toString()===per._id.toString());
      done();
    });
  });

});
