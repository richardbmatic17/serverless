'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  try {
    const params = JSON.parse(event.body);
    const data = await db.Users.create(params);
    if(!data) {
      return {
        status: 'FAILED',
        message: 'Failed creating user',
        data,
      }
    }

    return {
      status: 'SUCCESS',
      message: 'Successfully created user',
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
