'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  const params = event.queryStringParameters;
  const filters = {where: {}}
  if(params.id) {
    filters['where']['id'] = params.id
  }

  const data = await db.User.findAll(filters);

  return {
    status: 'SUCCESS',
    message: 'Successfully fetched details',
    data,
  };
};
