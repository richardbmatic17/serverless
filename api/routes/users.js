'use strict';
const { response } = require('../lib/utils');
const {
  details
} = require('../endpoints/users');
module.exports.handler = (event, context, callback) => {
  const funcName = event.pathParameters && event.pathParameters.funcName.toUpperCase();
  console.log(JSON.stringify({funcName}));

  switch (funcName) {
    case 'DETAILS':
      const results = details(event);
      callback(null, response(200, results));
      return;
    default: {
      const results = {
        status: 'ERROR',
        message: `No route available for ${funcName.toLowerCase()}`,
      };
      return callback(null, response(404, results));
    }
  }
};
