const assert = require('assert');
const persona = require('../models/personamodel');

describe('Deleting records from the DB', function() {
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

  it('Deletes on record from the DB', function(done) {
    persona.findOneAndRemove({
      nombre: 'Mario'
    }).then(function() {
      persona.findOne({
        nombre: 'Mario'
      }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });
});
