'use strict'
const models = require('../../models/db');

exports.allBooks = (req, res) => {
    models.Book.findAll()
    .then(books => {
        res.json(books);
    })
    .catch(error => {
        console.log(error);
        res.status(404).send(error);
    })
}

exports.saveUserBook = (req,res) => {
    let bookId = req.body.bookId;
    let userId = req.body.userId
models.Book.findByPk(bookId).then((book) => {
    book.addReader(userId);
})
.then(() => {
    res.json({success: 'Success, book added for User!'})
})
.catch(err => {
    console.log(err)
    res.status(404).send(error);
})

}