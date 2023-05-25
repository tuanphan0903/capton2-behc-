const express = require('express')
const router = express.Router()

const linkController = require('../controllers/link.controller')

router.get('/:id', linkController.getLink)

module.exports = router;