const details = require('./details').handler;
const update = require('./update').handler;
const create = require('./create').handler;
const destroy = require('./delete').handler;

module.exports = {
  details,
  update,
  create,
  destroy,
}