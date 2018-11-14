const assert = require('assert');
const persona = require('../models/personamodel');

//Describe test
describe('Saving records', function() {
  //Create test
  it('Saves a record to the DB', function(done) {
    var per = new persona({
      nombre: 'Mario',
      genero: 'Hombre',
      hijos:{hombre:1,mujer:1}
    });

    per.save().then(function() {
      assert(per.isNew == false);
      done();
    });

  });

});
