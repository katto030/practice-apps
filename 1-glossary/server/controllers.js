const model = require('./models.js');

const post = (req, res) => {
  model.post(req.body, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(201).json("added")
    }
  })
};

const deleteEntry = (req, res) => {
  var toDelete = {word: req.body.word};
  model.delete(toDelete, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json("deleted")
    }
  })
};

const get = (req, res) => {
  var toGet = {word: { "$regex": `${req.query.word}`, "$options": "i" }};
  model.get(toGet, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  })
};

const getAll = (req, res) => {
  model.get({}, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  })
}

const edit = (req, res) => {
  model.edit({word: req.body.word}, {definition: req.body.definition}, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json('edited');
    }
  })
};

module.exports.post = post;
module.exports.delete = deleteEntry;
module.exports.get = get;
module.exports.edit = edit;
module.exports.getAll = getAll;
