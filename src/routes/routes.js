const express = require('express'); 
const router = express.Router(); 

const RotaFabricio = require ('./routes -fabricio')

router.use('/', RotaFabricio)

module.exports = router;