const express = require('express');
const router = express.Router();

const Persona = require('../models/personaschema');
const mongoose = require('mongoose');

//ES6 promise
mongoose.Promise = global.Promise;


//handling incoming GET request to /censopersona
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET request to /censopersona'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST request to /censopersona'
  });
});

router.post('/ingpersona', (req, res, next) => {
  const pers = new Persona({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    genero: req.body.genero,
    fechanacimiento: req.body.fechanacimiento,
    documento: req.body.documento,
    fechaexpediciondocumento: req.body.fechaexpediciondocumento,
    lugarexpedicion: req.body.lugarexpedicion,
    niveleducativo: req.body.niveleducativo,
    estadocivil: req.body.estadocivil,
    profesion: req.body.profesion,
    grupoetnico: req.body.grupoetnico,
    religion: req.body.religion,
    sectortrabajo: req.body.sectortrabajo,
    horastrabajadassemanales: req.body.horastrabajadassemanales,
    salariomensual: req.body.salariomensual,
    celular: req.body.celular,
    correo: req.body.correo,
    paisnacimiento: req.body.paisnacimiento,
    departamentonacimiento: req.body.departamentonacimiento,
    ciudadnacimiento: req.body.ciudadnacimiento,
    nacionalidad: req.body.nacionalidad,
    sisben: req.body.sisben,
    eps: req.body.eps,
    discapacidad: req.body.discapacidad,
    tiempovividoensuactualcasa: req.body.tiempovividoensuactualcasa,
    hijos: req.body.hijos
  });

  pers.save().then(result => {
    console.log(result);
    res.status(200).json({
      message: "created",
      createdperson: result
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });


});

router.patch('/:personaid', (req, res, next) => {
  res.status(200).json({
    message: "updated"
  });
});

router.delete('/:personaid', (req, res, next) => {
  res.status(200).json({
    message: "deleted"
  });
});

module.exports = router;
