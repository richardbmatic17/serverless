'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body);
    const data = await db.Users.destroy({where: {id}});
    if(!data) {
      return {
        status: 'FAILED',
        message: 'Failed deleting user, user id not found',
      }
    }

    return {
      status: 'SUCCESS',
      message: `Successfully deleted user id ${id}`,
      data: `deleted count ${data}`,
    }
  } catch (error) {
    return {
      status: 'ERROR',
      message: 'Error fetching details',
      data: error,
    };
  }
};
