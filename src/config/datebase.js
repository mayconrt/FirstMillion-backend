const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/firstmillion')
// module.exports = mongoose.connect('mongodb://fmadm:agoravai@mongo_firstmillion:27017/firstmillion')