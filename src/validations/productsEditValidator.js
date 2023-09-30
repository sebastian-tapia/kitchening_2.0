const { check } = require("express-validator");

module.exports = [
  check("title")
    .notEmpty()
    .withMessage("Es obligatorio")
    .bail()
    .isLength({
      min: 4,
      max: 20,
    })
    .withMessage("Debe tener entre 4 y 20 caracteres"),
  check("price")
    .notEmpty()
    .withMessage("Es obligatorio")
    .isInt({
      gt: 1,
    })
    .withMessage("Debe ser positivo"),
  check("description").isLength({
    min: 20,
    max: 500,
  }).withMessage('Debe tener entre 20 y 500 caracteres'),
];
