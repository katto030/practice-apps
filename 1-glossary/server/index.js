require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require('./db.js');
const router = express.Router();
const controller = require('./controllers.js')
const morgan = require('morgan');
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());
app.use(morgan('dev'));

router.get('/word', controller.get);

router.get('/', controller.getAll);

router.post('/', controller.post);

router.delete('/', controller.delete);

router.put('/', controller.edit);

app.use('/glossary', router);

app.listen(process.env.PORT);

console.log(`Listening at http://localhost:${process.env.PORT}`);
