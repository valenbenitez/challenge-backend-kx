const Store = require('../models/store')
const seed = require('./seed.json')

const superSeeder = async () => {
    Store.create(seed)
        .then(console.log('Categorías cargadas en la base de datos --> ✅'))
}
// superSeeder()