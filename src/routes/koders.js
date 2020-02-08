
const express = require('express')
const koder = require('../usecases/koder')
const router = express.Router()

router.get('/', async (request, response) => {
  try {
    const koders = await koder.getAll()
    response.json({
      succes: true,
      message: 'All koders',
      data: {
        koders
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      succes: false,
      message: error.message
    })
  }
})

module.exports = router
