const { validationResult } = require('express-validator')
const logger = require('../utils/logger')


const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        logger.info('Validaciones hechas')
        return next()
    } catch (err) {
        res.status(400).send({ errors: err.array() })
    }
}

module.exports = { validateResult }