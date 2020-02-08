
const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true,
    toLowercase: true
  },
  email: {
    type: String,
    minlength: 5,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
    toLowercase: true,
    required: true
  },
  birhDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'n']
  }
})

module.exports = mongoose.model('Koders', koderSchema)
