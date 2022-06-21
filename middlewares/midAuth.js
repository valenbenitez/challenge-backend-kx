const User = require('../models/user')
const auth = require('basic-auth')

async function autenticacion(req, res, next) {
    const user = auth(req)
    const findUser = await User.findOne({ username: user.name })

    if (findUser) {
        req.user = user
        logger.info('Autenticacion exitosa')
        return next()
    } else {
        return res.status(400).send({ error: 'Error en la autenticacion' })
    }
}


module.exports = { autenticacion }