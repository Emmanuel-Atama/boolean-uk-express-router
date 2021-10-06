// Import here...
const express = require("express");

const router = express.Router();

const books = [
  {
    id: 1,
    title: "1984",
    type: "fiction",
    author: "George Orwell"
  },
  {
    id: 2,
    title: "Life of Pi",
    type: "fiction",
    author: "Yann Martel"
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    type: "non-fiction",
    author: "Dale Carnegie"
  },
  {
    id: 4,
    title: "The Lean Startup",
    type: "non-fiction",
    author: "Eric Reis"
  }
];

// Write routes here...

router.get("/", (req, res) => {
  console.log("here");
  res.json({ books });
});

router.get("/author/:name", (req, res) => {
  const { name } = req.params;

  const filteredBooks = books.find((book) => {
    const author = book.author;

    const nameForComparison = name.split("-").join("").toLowerCase();
    return author.toLowerCase() === nameForComparison;
  });

  console.log("Found books", filteredBooks);

  res.json({ books: filteredBooks });
});

router.post("/", (req, res) => {
  const boookToCreate = {
    ...req.body
  };

  boookToCreate.id = books.length + 1;

  const updatedBooks = [...books, boookToCreate];

  console.log("Check updatedFilms: ", updatedBooks);

  res.json({ book: boookToCreate });
});

module.exports = router;
