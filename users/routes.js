const UsersController = require('./UsersController')
const usersSchema = require('./schema')


module.exports = async (app) => {
  app.route({
    method: 'GET',
    url: '/users/',
    schema: usersSchema.getUser,
    handler: (request, response) => {
      UsersController.getUser(request, response)
    }
  })
}

