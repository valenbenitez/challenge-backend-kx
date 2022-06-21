const Store = require('../models/store')
const { getData, postCommerce } = require('../services/index')

const getCommerces = async (req, res) => {
    try {
        const commerces = await getData(req.query)
        commerces ? res.status(200).send({ data: commerces }) : res.status(400).send({ error: 'Comercios no encontrados' })
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: 'Error en buscar los comercios' })
    }
}

const createCommerce = async (req, res) => {
    try {
        const commerce = await postCommerce(req.body)
        commerce ? res.status(200).send({ message: 'Comercio creado correctamente', data: commerce }) : res.status(400).send({ error: 'Error al intentar crear un nuevo comercio' })
    } catch (error) {
        console.log(error)
        res.status(400).send({error: 'Error al querer crear un comercio'})
    }
}

module.exports = {
    getCommerces,
    createCommerce
}