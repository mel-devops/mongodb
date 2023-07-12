const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://melkydd:yynQwC83uUUfUYOD@cluster2.3honm6b.mongodb.net/?retryWrites=true&w=majority';
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
  // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    type: Schema.Types.ObjectId,
    ref: 'planet'
  }
});

// creats a model for the 'species' collection that will be part of the export
const Species = mongoose.model('species', speciesSchema);

const planetSchema = new Schema({
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: Number,
  
});

const Planet = mongoose.model('planet', planetSchema);

// TODO: create a schema for 'film' and use it to create the model for it below

const filmSchema = new Schema({
  title: String,
  episode_id: Number,
  opening_Crawl: String,
  director: Number,
  producer: String,
  release_date: Date,
  
});

const Film = mongoose.model('films', filmSchema);


// TODO: create a schema for 'person' and use it to create the model for it below

const peopleSchema = new Schema({
  name: {type: String, required: true },
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  species: String,
  species_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    type: Schema.Types.ObjectId,
    ref: 'species'
  },
  homeworld: String, 
  homeworld_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    type: Schema.Types.ObjectId,
    ref: 'planet'
  }, 
  height: Number, 
  // films: { keys: title (String), id (ObjectId referencing 'film')
  // }
  
});

const Person = mongoose.model('people', peopleSchema);

module.exports = {
  Species,
  Planet,
  Film,
  Person
};