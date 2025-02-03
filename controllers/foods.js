// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');


router.get('/', (req, res) => {
    res.render('foods/index.ejs');
  });

  router.get('/new', (req, res) => {
    res.render('foods/new.ejs')
  })

// router logic will go here - will be built later on in the lab

module.exports = router;
