const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();


var url = "mongodb+srv://admin:admin@cluster0-ty3lw.mongodb.net/bolumbiacns?retryWrites=true"

mongoose.connect(url, {
  //useMongoClient: true
  useNewUrlParser:true
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/*app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-headers','*');
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,GET');
    return res.status(200).json({});
  }
});*/

//rutas para los censos
const censopersonaroutes = require('./routes/censopersona');
const userRoutes = require('./routes/login');


app.use('/censopersona', censopersonaroutes);
app.use('/user', userRoutes);

//handling errors
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});


app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.set('view egine', 'ejs');

module.exports = app;
