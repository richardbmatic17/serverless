'use strict';
module.exports.handler = (event) => {
  const params = event.queryStringParameters;
  console.log(JSON.stringify({params}));

  if (params === null || !params.id) {
    return {
      status: 'SUCCESS',
      message: 'Successfully fetched details',
      data: [
        {
          name: 'Richard Matic',
          age: '27',
          job: 'Node JS Developer',
        },
        {
          name: 'Joy Infectana',
          age: '27',
          job: 'Nurse',
        },
        {
          name: 'Apollo',
          age: '1',
          job: 'baby pa',
        },
      ]
    };
  }

  if (params.id == 1) {
    return {
      status: 'SUCCESS',
      message: 'Successfully fetched details',
      data: [
        {
          name: 'Richard Matic',
          age: '27',
          job: 'Node JS Developer',
        },
      ]
    };
  }

  return {
    status: 'FAILED',
    message: 'Details not available!!!',
  };
};
