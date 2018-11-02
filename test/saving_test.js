const assert = require('assert');
const censo = require('../models/censo');

//Describe test
describe('Saving records', function() {
  //Create test
  it('Saves a record to the DB', function(done) {
    var per = new censo({
      nombre: 'Mario',
      genero: 'Hombre',
      direccion: 'cll 12 # 39-290'
    });

    per.save().then(function() {
      assert(per.isNew == false);
      done();
    });

  });

});
