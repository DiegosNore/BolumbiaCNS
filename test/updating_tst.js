const assert = require('assert');
const censo = require('../models/censo');

describe('Updating records in the DB', function() {
  var per;
  beforeEach(function(done) {
    per = new censo({
      nombre: 'Mario',
      genero: 'Hombre',
      direccion: 'cll 12 # 39-290',
      edad:10
    });

    per.save().then(function() {
      done();
    });
  });

  it('Updates one record in the DB', function(done) {
    censo.findOneAndUpdate({
      nombre: 'Mario'
    }, {
      nombre: 'Luigi'
    }).then(function() {
      censo.findOne({
        _id: per._id
      }).then(function(result) {
        assert(result.nombre === 'Luigi');
        done();
      });
    });
  });

  it('Increments the age by 1',function(done){
    //Incrementa el peso en 1, el $inc es una funcion que se le pasa un objeto
    //y la cantidad en la que quiere que se aunmente
    persona.updateOne({},{$inc:{edad:1}}).then(function(){
      persona.findOne({nombre:'Mario'}).then(function(record){
        assert(record.edad===11);
        done();
      });
    });
  });
});
