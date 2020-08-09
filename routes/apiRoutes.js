const router = require("express").Router();
const db = require("../models");

//get route for returning all books from the database
router.get("/books", (req,res) => {
    db.Book.find({})
    .then(books => res.json(books))
    .catch(err => res.status(422).end())
})
//post route for adding a book to the database
router.post("/books", (req,res) => {
    db.Book.create(req.body)
    .then(books => res.json(books))
    .catch(err => res.status(422).end())
})
//delete route for deleting the book from the database
router.delete("/books/:id", (req,res) => {
    db.Book.findById({_id: req.params.id})
    .then(books => books.remove())
    .then(books => res.json(books))
    .catch(err => res.status(422).end())
})
module.exports = router;