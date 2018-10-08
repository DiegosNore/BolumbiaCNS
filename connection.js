const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the DB before tests run
before(function(done){
  //Connect to mongodb, el tetaroo es el nombre de la db a la que me voy a conectar
  mongoose.connect('mongodb://localhost/BolumbiaCNS');
  //Solo hace el proceso una vez eso significa el once
  mongoose.connection.once('open',function(){
    console.log('Connection succesfull');
    done();
  //El on significa que mira la accion siempre no solo 1 vez
  }).on('error',function(error){
    console.log('Connection error:',error);
  });
});

//drop the characters collection before each test
beforeEach(function(done){
  //Drop de collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
