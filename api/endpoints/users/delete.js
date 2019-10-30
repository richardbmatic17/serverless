'use strict';
const db = require('../../database/models');

module.exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const data = await db.User.destroy({where: {id}});
  const response = {
    status: data ? 'SUCCESS' : 'FAILED',
    message: data ? 'Successfully fetched details' : 'Failed fetched details',
    data,
  };

  return response;
};
