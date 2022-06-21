const Store = require('../models/store')

function formatBalance(amount) {
    const style = { style: 'currency', currency: 'ARS' }
    const format = new Intl.NumberFormat('es-AR', ars)
    return format.format(amount)
}

const getData = async ({ sort, page = 1, limit = 10 }) => {
    try {
        const data = await Store.find()
        if (sort) {
            data = data.sort(sort)
            data = data.skip((page - 1) * limit).limit(limit)
        }
        data = data.map(el => {
            let element = {
                id: el.id,
                name: el.name,
                cuit: el.cuit,
                currentBalance: formatBalance(el.currentBalance),
                active: el.active ? 'Si' : 'No',
                lastSale: el.lastSale
            }
            el.concepts.forEach(value => {
                let i = 1
                element['concept' + i] = value
                i = i + 1
            })
            return element
        })
        const total = await Store.countDocuments({})
        const pages = Math.ceil(total / limit)
        return {
            data,
            page,
            pages,
            limit,
            total
        }
    } catch (error) {
        return error
    }
}

const postCommerce = async (body) => {
    try {
        const newCommerce = await Store.create(body)
        return newCommerce
    } catch (error) {
        return error
    }
}

module.exports = {
    getData,
    postCommerce
}