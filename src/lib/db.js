
const mongoose = require('mongoose')

const DB_PASSWORD = 'Zorra121'
const DB_NAME = 'kodemia'
const url = `mongodb+srv://itielseriol:${DB_PASSWORD}@sexta-gen-zjrx3.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
