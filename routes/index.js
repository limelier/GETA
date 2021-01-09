const router = require('express').Router()
const {getFruit, postFruit, putFruit, deleteFruit} = require('../controller')

router.get('/fruit', getFruit)
router.post('/fruit', postFruit)
router.put('/fruit', putFruit)
router.delete('/fruit', deleteFruit)

module.exports = router