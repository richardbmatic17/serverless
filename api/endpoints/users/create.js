'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  try {
    const params = JSON.parse(event.body);
    const data = await db.User.create(params);
    const response = {
      status: data ? 'SUCCESS' : 'FAILED',
      message: data ? 'Successfully fetched details' : 'Failed fetched details',
      data,
    };
    return response;
  } catch (error) {
    console.log({error});
    const response = {
      status: 'ERROR',
      message: 'Error creating user',
      data: error,
    };
    return response;
  }
};
