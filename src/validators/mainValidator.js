const {check} = require('express-validator')

module.exports = [
    check("name")
    .notEmpty().withMessage("Campo requerido"),

    check("color")
    .notEmpty().withMessage("Campo requerido"),

    check("email")
    .notEmpty().withMessage("Campo requerido")
    .isEmail().withMessage("Ingrese un email válido"),
    
    check("age")
    .notEmpty().withMessage("Campo requerido")
    .isNumeric().withMessage("Solo numeros")


]