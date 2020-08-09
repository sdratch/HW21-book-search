const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: Text,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
