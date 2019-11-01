'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  try {
    const params = event.queryStringParameters;
    const filters = {where: {}};
    if(params.id) {
      filters['where']['id'] = params.id;
    }
    const data = await db.Users.findAll(filters);
    
    if(data.length == 0) {
      return {
        status: 'FAILED',
        message: 'Failed fetched details',
        data,
      }
    }

    return {
      status: 'SUCCESS',
      message: 'Successfully fetched details',
      data,
    }
  } catch (error) {
    return {
      status: 'ERROR',
      message: 'Error fetching details',
      data: error,
    };
  }
};
