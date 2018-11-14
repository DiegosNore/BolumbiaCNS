const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.status(200).json({
    message:"vivienda"
  });
});

router.post('/',(req,res,next)=>{
  res.status(201).json({
    message:"censo vivienda creado"
  });
});

router.post('/',(req,res,next)=>{
  res.status(201).json({
    message:"censo vivienda creado"
  });
});

module.exports = router;
