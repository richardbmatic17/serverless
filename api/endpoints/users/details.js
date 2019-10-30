'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  const params = event.queryStringParameters;
  const filters = {where: {}}
  if(params.id) {
    filters['where']['id'] = params.id
  }
  const data = await db.User.findAll(filters);
  const response = {
    status: data.length > 0 ? 'SUCCESS' : 'FAILED',
    message: data.length > 0 ? 'Successfully fetched details' : 'Failed fetched details',
    data,
  };

  return response;
};
