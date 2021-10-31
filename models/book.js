// Filename:     models/book.js
// Student name: Kyle O'Keeffe
// StudentID:    301156790
// Date:         Oct. 30, 2021 

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);