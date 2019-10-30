'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  const { new_data, id } = JSON.parse(event.body);
  const data = await db.User.update(new_data, {where: {id}});
  const response = {
    status: data.toString() != 0 ? 'SUCCESS' : 'FAILED',
    message: data.toString() != 0 ? 'Successfully updated details' : 'Failed updated details',
    data,
  };

  return response;
};
