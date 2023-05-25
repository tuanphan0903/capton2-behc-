const express = require('express')
const router = express.Router()
const cardController = require('../controllers/card.controller')

router.post('/post', cardController.postCard)

module.exports = router