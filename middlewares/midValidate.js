const { checkSchema } = require('express-validator')
const { validateResult } = require('../helpers/validateResult')

const validateCreate = [
    checkSchema({
        name: {
            isString: {
                errorMessage: 'El nombre debe ser una cadena de texto'
            },
            notEmpty: {
                errorMessage: 'Porfavor ingrese un nombre'
            }
        },
        cuit: {
            notEmpty: {
                errorMessage: 'Porfavor ingrese un cuit'
            },
            isString: {
                errorMessage: 'El cuit debe ser una cadena de texto'
            }
        },
        concepts: {
            isArray: {
                errorMessage: 'El tipo de datos de conceptos debe ser un array'
            },
        },
        currentBalance: {
            isInt: {
                errorMessage: 'El balance debe ser un entero'
            },
            notEmpty: {
                errorMessage: 'Por favor ingrese el balance actual'
            }
        },
        active: {
            notEmpty: {
                errorMessage: 'Por favor ingrese si se encuentra activo'
            },
            isBoolean: {
                errorMessage: 'Indique si esta activo a traves de un booleano porfavor'
            }
        },
        lastSale: {
            isDate: {
                errorMessage: 'La ultima venta debe indicarla como una fecha'
            },
            notEmpty: {
                errorMessage: 'Porfavor indique la fecha de la ultima venta'
            }
        }
    }),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }