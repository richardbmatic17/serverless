'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  try {
    const { new_data, id } = JSON.parse(event.body);
    const data = await db.User.update(new_data, {where: {id}});
    if(data.toString() === '0') {
      return {
        status: 'FAILED',
        message: 'Failed updating details',
      }
    }

    return {
      status: 'SUCCESS',
      message: 'Successfully updated details',
    }
  } catch (error) {
    return {
      status: 'ERROR',
      message: 'Error updating user',
      data: error,
    };
  }
};
