// Filename:     controllers/index.js
// Student name: Kyle O'Keeffe
// StudentID:    301156790
// Date:         Oct. 30, 2021 

//Renders the Home page using the index.ejs template

exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};
