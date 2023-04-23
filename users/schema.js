const getUser = {
  querystring: {
    type: 'object',
    properties: {
      id: {type: 'number'},
      test: {type: 'string'}
    },
    required: ['id', 'test']
    },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          username: {type: 'string'},
          location: {type: 'string'},
          age: {type: 'number'},
          id: {type: 'number'}
        }
      }
    }
  }
}


module.exports = {
  getUser
}