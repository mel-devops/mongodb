const mongoose = require('mongoose');

const MONGO_URI = 'mongorestore -db=starwars --uri="mongodb+srv://melkydd:yynQwC83uUUfUYOD>@cluster2.3honm6b.mongodb.net/?retryWrites=true&w=majority" dump';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'starwars'
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
  name: String,
  classification: String,
  average_height: String,
  average_lifespan: String,
  hair_colors: String,
  skin_colors: String,
  eye_colors: String,
  language: String,
  homeworld: String,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: 'Planets' 

const Species = mongoose.model('Species', speciesSchema);

const planetsSchema = new Schema({
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  population: Number,
});

const Planets = mongoose.model('Planets', planetsSchema);

const filmsSchema = new Schema({
  title: String,
  episode_id: Number,
  opening_crawl: String, 
  director: String,
  producer: String,
  release_date: Date,
});

const Films = mongoose.model('Films', filmsSchema);

const peopleSchema = new Schema({
  name: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  height: Number,
  homeworld: String,
  homeworld_id: {
    type: Schema.Types.ObjectId,
    ref: 'Planets' 
  },
  species: String,
  species_id: {
    type: Schema.Types.ObjectId,
    ref: 'Species' 
  },
  films: [
    {
      title: {
        type: String,
        required: true
      },
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Films' 
      }
    }
  ]
});

const People = mongoose.model('People', peopleSchema);

module.exports = {
  Species,
  Planets,
  Films,
  People
};