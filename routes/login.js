const express = require('express');
const router = express.Router();
const sessions = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

router.post('/login',(req,res,next)=>{

  User.find({email:req.body.email}).exec().then(user =>{

    if(user.length < 1){
      return res.status(401).json({
        message:'Login failed'
      });
    }

    bcrypt.compare(req.body.contraseña, user[0].contraseña,(err,result)=>{
      console.log('puta');
      if(err){

        return res.status(401).json({
          message:'Login failed'
        });
      }
      if(result){
        const token = jwt.sign({
          email:user[0].email
        },"bolumbia",{
          expiresIn:"1h"
        });
        console.log('puta');
        return res.status(200).json({
          message:'Login successful',
          toke:token
        });
      }
      return res.status(401).json({
        message:'Login failed'
      });
    });
  }).catch(err =>{
    console.log(err);
    res.status(500).json({
      error:err
    })
  });
});

module.exports=router;
