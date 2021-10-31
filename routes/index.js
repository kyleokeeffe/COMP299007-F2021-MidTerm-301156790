// Filename:     routes/index.js
// Student name: Kyle O'Keeffe
// StudentID:    301156790
// Date:         Oct. 30, 2021 

var express = require('express');
var router = express.Router();

//import Index controller
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', controlerIndex.home);

module.exports = router;
