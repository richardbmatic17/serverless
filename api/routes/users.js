'use strict';
const { response } = require('../lib/utils');
const {
  details,
  update,
  create,
  destroy,
} = require('../endpoints/users');
require('dotenv').config();

module.exports.handler = async (event, context, callback) => {
  const funcName = event.pathParameters && event.pathParameters.funcName.toUpperCase();
  console.log(JSON.stringify({funcName}));
  console.log(JSON.stringify({event}));

  switch (funcName) {
    case 'DETAILS':
      callback(null, response(await details(event)));
      return;
    case 'UPDATE':
      callback(null, response(await update(event)));
      return;
    case 'CREATE':
      callback(null, response(await create(event)));
      return;
    case 'DELETE':
      callback(null, response(await destroy(event)));
      return;
    default: {
      const results = {
        status: 'ERROR',
        message: `No route available for ${funcName.toLowerCase()}`,
      };
      return callback(null, response(results));
    }
  }
};
