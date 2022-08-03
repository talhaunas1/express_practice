const Joi = require("joi");
const express = require("express"); 
const app = express();

const port = process.env.PORT || 5000;

// database (array of objects)

const database = [
  { movie: "gray", id: 1 },
  { movie: "black", id: 2 },
  { movie: "blue", id: 3 },
];

// Middle ware

app.use(express.json());

// parameter
// 1. route

// 2. middleware

// Get Requests

app.get("/api/movies", (req, res) => {
  res.send(database);
});

app.get("/api/movie/:id", (req, res) => {
  const id = req.params.id;  
  const movie = database.find((item) => item.id === parseInt(id));
  if (!movie) return res.status(404).send("Movie with this id does not found");

  res.status(202).send(movie);
});

// POST request (data is coming in incripted form we have to dicrpt it)

app.post("/api/movie", (req, res) => {
  // validation
  const { error } = validateData(req.body);
  if (error) {
    return res.send(error.message);
  }

  const movie = {
    movie: req.body.movie,
    id: database.length + 1,
  };
  database.push(movie);
  res.send(database);
});

// update requests

app.put("/api/movie/:id", (req, res) => {
  // check if the movie exist
  const id = req.params.id;
  const movie = database.find((item) => item.id === parseInt(id));
  if (!movie) return res.status(404).send("Movie with this id does not found");
  //   validate through JOI
  const { error } = validateData(req.body);
  if (error) {
    return res.send(error.message);
  }
  // update

  movie.movie = req.body.movie;
  res.send(movie);
});

app.delete("/api/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = database.find((item) => item.id === parseInt(id));
  if (!movie) return res.status(404).send("Movie with this id does not found");

  const index = database.indexOf(movie);
  database.splice(index, 1);

  res.send(movie);
});

app.listen(port, () => console.log(`running on port ${port}`));

const validateData = (movie) => {
  const schema = Joi.object({
    movie: Joi.string().min(3).max(10).required(),
  });

  return schema.validate(movie);
};
