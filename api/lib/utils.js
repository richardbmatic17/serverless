const response = (response) => {
  console.log(JSON.stringify({response}));
  const {
    status,
    message,
    data
  } = response;

  // TODO: Study status code
  const res = {
    statusCode: status !== 'ERROR' ? 200 : 400,
    body: JSON.stringify({
      status,
      message,
      data,
    }, null, 2),
  }
  console.log(JSON.stringify({res}));

  return res;
}

module.exports = {
  response,
}