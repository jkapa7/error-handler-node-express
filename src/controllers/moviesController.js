const { moviesService } = require("../services");
const { catchedAsync, response } = require("../utils");

const getMovies = async (req, res) => {
  const { name } = req.query;
  const movies = name
    ? await moviesService.getMovieByName(name)
    : await moviesService.getAllMovies();
  response(res, 200, movies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.getMovieById(id);
  response(res, 200, movie);
};

module.exports = {
  getMovies: catchedAsync(getMovies),
  getMovieById: catchedAsync(getMovieById),
};

// const { moviesService } = require("../services");
// const { catchedAsync } = require("../utils");

// const getMovies = async (req, res) => {
//   try {
//     const movies = await moviesService.getAllMovies();
//     res.status(200).json(movies);
//   } catch (error) {
//     //ESTOY DICIENDOLE AL MANEJADOR DE ERRORES DE EXPRESS, YO LO CATCHEE, LO ATRAPE, TU MANEJALO
//     next(error);
//   }
// };

// const getMovieById = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const movie = await moviesService.getMovieById(id);
//     res.status(200).json(movie);
//   } catch (error) {
//     //ESTOY DICIENDOLE AL MANEJADOR DE ERRORES DE EXPRESS, YO LO CATCHEE, LO ATRAPE, TU MANEJALO
//     next(error);
//   }
// };

// module.exports = {
//   getMovies,
//   getMovieById
// };
