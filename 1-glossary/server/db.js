const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
mongoose.connect('mongodb://localhost:27017/glossarylist', {useNewUrlParser: true, useUnifiedTopology: true});

const glossarySchema = new Schema ({
  word: String,
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

module.exports.Glossary = Glossary;