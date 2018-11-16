const express = require('express');
const router = express.Router();
const sessions = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require("../models/userSchema");

var session;

//ES6 promise
mongoose.Promise = global.Promise;


//handling incoming GET request to
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /login'
  });
});

router.post('/signup',(req,res,next)=>{
  User.find({email:req.body.email}).exec().then(user=>{
    if(user.length>=1){
      return res.status(409).json({
        message:'Correo ya existente'
      });
    }else{
      bcrypt.hash(req.body.contraseña,10,(err,hash)=>{
        if(err){
          return res.status(500).json({
            error:err
          });
        }else{
          const user = new User({
            email:req.body.email,
            contraseña:hash,
            cedula:req.body.cedula
          });
          user.save().then(result=>{
            console.log(result);
            res.status(201).json({
              message:'Usuario creado'
            });
          }).catch(err =>{
            console.log(err);
            res.status(500).json({
              error:err
            });
          });
        }
      });
    }
  });


});

module.exports=router;
