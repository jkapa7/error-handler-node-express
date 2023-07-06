const express = require("express");
//NOS PERMITE VER LAS PETICIONES DEL CLIENTE EN LA CONSOLA
const morgan = require("morgan");
const resError = require("./utils/resError");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use(require("./router"));

//PASANDOLE 4 VALORES AL SERVER ERR,REQ,RES Y NEXT, EL SABE QUE ESTE ES EL NUEVO MANEJADOR DE ERRORES, ESTAMOS REMPLAZANDO EL MANEJADOR DE ERRORES DE EXPRESS Y DECIDO QUE RESPONDE. ASI NO MUESTRO LA TRAZA DEL ERROR
server.use((err, req, res, next) => {
  const { statusCode, message } = err;
  resError(res, statusCode, message);
});

module.exports = server;
