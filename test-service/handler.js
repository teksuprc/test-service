'use strict';

module.exports.hello = async (event, context, callback) => {
  if(event.httpMethod === 'GET') {
    console.log('get method');
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Method: GET, Go Serverless v1.0! Your function executed successfully!',
          input: event,
        },
        null,
        2
      ),
    };
  }
  else {
    console.log('http method other than GET');
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
