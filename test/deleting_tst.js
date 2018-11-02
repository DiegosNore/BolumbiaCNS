const assert = require('assert');
const censo = require('../models/censo');

describe('Deleting records from the DB', function() {
  var per;
  beforeEach(function(done) {
    per = new censo({
      nombre: 'Mario',
      genero: 'Hombre',
      direccion: 'cll 12 # 39-290'
    });

    per.save().then(function() {
      done();
    });
  });

  it('Deletes on record from the DB', function(done) {
    censo.findOneAndRemove({
      nombre: 'Mario'
    }).then(function() {
      censo.findOne({
        nombre: 'Mario'
      }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });
});
