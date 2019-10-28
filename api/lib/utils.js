const response = (statusCode, response) => {
  console.log(JSON.stringify({statusCode, response}));
  const {
    status,
    message,
    data
  } = response;

  return {
    statusCode,
    body: JSON.stringify({
      status,
      message,
      data,
    }, null, 2),
  }
}

module.exports = {
  response,
}