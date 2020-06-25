const server = require('./config/server')
require('./config/datebase')
require('./config/routes')(server)