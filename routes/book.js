// Filename:     routes/book.js
// Student name: Kyle O'Keeffe
// StudentID:    301156790
// Date:         Oct. 30, 2021 

var express = require('express');
var router = express.Router();

//Import book controller
let bookController = require('../controllers/book');

// Router for lists books function
router.get('/list', bookController.bookList);

// Router for book details function
router.get('/details/:id', bookController.details);

// Routers for edit functions
router.get('/edit/:id', bookController.displayEditPage);
router.post('/edit/:id', bookController.processEditPage);

// Router for Delete function
router.get('/delete/:id', bookController.performDelete);

// Routers for Add functions
router.get('/add', bookController.displayAddPage);
router.post('/add', bookController.processAddPage);


module.exports = router;