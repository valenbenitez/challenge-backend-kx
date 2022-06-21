const Store = require('../models/store');
const User = require('../models/user')
const logger = require('../utils/logger')
const superSeeder = require('../utils/seeder')

exports.init = async function () {
    if (!await User.countDocuments({ "username": "test@koibanx.com" })) {
        let user = new User();
        user.username = "test@koibanx.com";
        user.password = "admin";
        await User.create(user);

        logger.info("Test User created")
    }
    else if (await Store.estimatedDocumentCount()) {
        logger.info('Datos cargados')
    } else {
        logger.info('cargando el seed')
        await superSeeder()
        logger.info('informacion lista')
    }

}
