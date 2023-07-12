const models = require('../models/starWarsModels');
const {Person, Species, Film, Planet} = require('../models/starWarsModels');

const starWarsController = {};

starWarsController.getCharacters = (req, res, next) => {
  Person.find({})
    .then((result) => res.locals = result)
    .catch((err) => console.log(err.message));


  next();
};

starWarsController.getSpecies = (req, res, next) => {
  Species.find({})
    .then((result) => res.locals = result)
    .catch((err) => console.log(err.message));

  next();
};

starWarsController.getHomeworld = (req, res, next) => {
  Planet.find({})
    .then((result) => res.locals = result)
    .catch((err) => console.log(err.message));


  next();
};

starWarsController.getFilm = (req, res, next) => {
  Film.find({})
    .then((result) => res.locals = result)
    .catch((err) => console.log(err.message));


  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;