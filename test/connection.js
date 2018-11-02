const mongoose = require('mongoose');

//ES6 promise
mongoose.Promise = global.Promise;

before(function(done) {

  mongoose.connect('mongodb://localhost/BolumbiaCNS');

  mongoose.connection.once('open', function() {
    console.log("Connection succesfull");
    done();
  }).on('error', function(error) {
    console.log('Connection error:', error);
  });

});

beforeEach(function(done){
  mongoose.connection.collections.personas.drop().then(function(){
    done();
  });
});
