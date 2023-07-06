const { ClientError } = require("../utils/errors");

const data = [
  {
    id: 1,
    title: "Titanic",
  },
  {
    id: 2,
    title: "Interestellar",
  },
  {
    id: 3,
    title: "Misión imposible",
  },
];

const getAllMovies = async () => {
  return data;
};

const getMovieById = async (id) => {
  const movie = data.find((e) => e.id == id);
  if (!movie) throw new ClientError("invalid ID", 400);
  return movie;
};

const getMovieByName = async (name) => {
  const movie = data.filter((e) => e.title == name);
  return movie;
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMovieByName,
};
