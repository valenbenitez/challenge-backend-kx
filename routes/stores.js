const logger = require('../utils/logger');
const express = require('express');
const router = express.Router();
const { getCommerces, createCommerce } = require('../controllers/index')
const { autenticacion } = require('../middlewares/midAuth')
const { validateCreate } = require('../middlewares/midValidate')

router.get('/stores', autenticacion, getCommerces)
router.post('/stores', autenticacion, validateCreate, createCommerce)

// router.route('/stores')
// .get(function(){logger.info("pending validations")}, function(){logger.info("pending use case")});
module.exports = router;