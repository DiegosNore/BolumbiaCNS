const assert = require('assert');
const persona = require('../models/personamodel');

describe('Updating records in the DB', function() {
  var per;
  beforeEach(function(done) {
      per = new persona({
      nombre: 'Mario',
      genero: 'Hombre',
      hijos:{hombre:1,mujer:1}
    });

    per.save().then(function() {
      done();
    });
  });

  it('Updates one record in the DB', function(done) {
    persona.findOneAndUpdate({
      nombre: 'Mario'
    }, {
      nombre: 'Luigi'
    }).then(function() {
      persona.findOne({
        _id: per._id
      }).then(function(result) {
        assert(result.nombre === 'Luigi');
        done();
      });
    });
  });
});
