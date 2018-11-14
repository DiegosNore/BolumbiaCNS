const express = require('express');
const router = express.Router();
const sessions = require('express-session');
const mongoose = require('mongoose');

var session;

//ES6 promise
mongoose.Promise = global.Promise;


//handling incoming GET request to /censopersona
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /login'
  });
});

router.post('/submit',(req,res,next)=>{
  
});
