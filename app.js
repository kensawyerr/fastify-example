const Fastify = require('fastify')
const app = new Fastify();
const route = require('./users/routes')

app.register(route, {prefix: '/api'})

module.exports = app;