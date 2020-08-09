const router = require("express").Router();
const db = require("../models");

router.get("/books", (req,res) => {
    db.Book.find({})
    .then(books => res.json(books))
    .catch(err => res.status(422).end())
})
router.post("/books", (req,res) => {
    db.Book.create(req.body)
    .then(books => res.json(books))
    .catch(err => res.status(422).end())
})
module.exports = router;