// Import here...
const express = require("express");

const router = express.Router();

const films = [
  {
    id: 1,
    title: "Bonnie and Clyde",
    director: "Arthur Penn"
  },
  {
    id: 2,
    title: "Reservoir Dogs",
    director: "Quentin Tarantino"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan"
  },
  {
    id: 4,
    title: "Django Unchained",
    director: "Quentin Tarantino"
  }
];

// Write routes here...

router.get("/", (req, res) => {
  console.log("here");
  res.json({ films });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const film = films.find((film) => film.id === id);

  res.json({ film });
});

router.post("/", (req, res) => {
  const filmToCreate = {
    ...req.body
  };

  filmToCreate.id = films.length + 1;

  const updatedFilms = [...films, filmToCreate];

  console.log("Check updatedFilms: ", updatedFilms);

  res.json({ film: filmToCreate });
});

module.exports = router;
