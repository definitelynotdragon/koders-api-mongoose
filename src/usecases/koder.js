
const Koder = require('../models/koder')

function create ({ name, gender, email, birthDate }) {
  const newKoder = new Koder({ name, gender, email, birthDate })
  return newKoder.save()
}

function deleteById (id) {
  return Koder.findByIdandDelete(id)
}

function getAll () {
  return Koder.find({})
}

function getById (id) {
  return Koder.findById(id)
}

function updateById (id, koderInfoToUpdate) {
  return Koder.findByIdandUpdate(id, koderInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
