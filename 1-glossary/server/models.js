const db = require('./db.js');

const post = (data, cb) => {
  db.Glossary.create(data)
  .then(() => cb())
  .catch((err) => cb(err))
}

const deleteEntry = (data, cb) => {
  db.Glossary.deleteOne(data)
  .then(() => cb())
  .catch((err) => cb(err))
}

const get = (data, cb) => {
  db.Glossary.find(data)
  .then((data) => {
    console.log('--find result--: ',data);
    cb(null, data);
  })
  .catch((err) => cb(err))
}

const edit = (existing, updated, cb) => {
  db.Glossary.updateOne(existing, updated)
  .then(() => cb())
  .catch((err) => cb(err))
}

module.exports.post = post;
module.exports.delete = deleteEntry;
module.exports.get = get;
module.exports.edit = edit;
