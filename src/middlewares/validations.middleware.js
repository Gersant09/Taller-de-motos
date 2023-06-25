const { validationResult, body } = require('express-validator');

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.mapped(),
    });
  }

  next();
};

exports.createLoginValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email no debe estar vacio 😅')
    .isEmail()
    .withMessage('Verifique el Email 🤨'),

  body('password')
    .notEmpty()
    .withMessage('contraseña no debe estar vacio 😅 ')
    .isLength({ min: 8 })
    .withMessage('contraseña debe tener minimo 8 carácteres😅 ')
    .matches(/\d/)
    .withMessage('contraseña debe tener al menos un numero😅 ')
    .matches(/[A-Z]/)
    .withMessage('contraseña debe tener al menos una letra mayúscula😅 ')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('contraseña debe tener al menos un carácter especial😅 '),

  validateFields,
];

exports.createUserValidation = [
  body('name').notEmpty().withMessage('nombre no debe estar vacio 😅'),

  body('email')
    .notEmpty()
    .withMessage('Email no debe estar vacio 😅')
    .isEmail()
    .withMessage('Verifique el Email 🤨'),

  body('password')
    .notEmpty()
    .withMessage('contraseña no debe estar vacio 😅 ')
    .isLength({ min: 8 })
    .withMessage('contraseña debe tener minimo 8 carácteres😅 ')
    .matches(/\d/)
    .withMessage('contraseña debe tener al menos un numero😅 ')
    .matches(/[A-Z]/)
    .withMessage('contraseña debe tener al menos una letra mayúscula😅 ')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('contraseña debe tener al menos un carácter especial😅 '),

  validateFields,
];

exports.createRepairValidation = [
  body('date').notEmpty().withMessage('este campo no debe estar vacio 😅'),

  body('motorsNumber').notEmpty().withMessage(' no debe estar vacio 😅'),

  body('description').notEmpty().withMessage(' no debe estar vacio 😅'),

  body('userId').notEmpty().withMessage(' no debe estar vacio 😅'),

  validateFields,
];

exports.updateUserValidation = [
  body('name').notEmpty().withMessage('nombre no debe estar vacio 😅'),

  body('email')
    .notEmpty()
    .withMessage('Email no debe estar vacio 😅')
    .isEmail()
    .withMessage('Verifique el Email 🤨'),

  body('password')
    .notEmpty()
    .withMessage('contraseña no debe estar vacio 😅 ')
    .isLength({ min: 8 })
    .withMessage('contraseña debe tener minimo 8 carácteres😅 ')
    .matches(/\d/)
    .withMessage('contraseña debe tener al menos un numero😅 ')
    .matches(/[A-Z]/)
    .withMessage('contraseña debe tener al menos una letra mayúscula😅 ')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('contraseña debe tener al menos un carácter especial😅 '),

  body('role').notEmpty().withMessage('nombre no debe estar vacio 😅'),

  validateFields,
];

exports.updateRepairValidation = [
  body('date').notEmpty().withMessage('este campo no debe estar vacio 😅'),

  body('description').notEmpty().withMessage(' no debe estar vacio 😅'),

  validateFields,
];
