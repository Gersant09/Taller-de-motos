const Product = require("../models/user.model");




exports.getUsers = async (req, res) => {
  const time = req.requestTime;
  const products = await Product.findAll()
  res.json({
    requestTime: time,
    message: " Hello from GET Users shop GS 🛵",
    results: products.length,
         status: 'success',
         message: 'Products found',
         products
  });
};

exports.UpdateUsers = (req, res) => {
  console.log(req.body);
  const time = req.requestTime;
  res.json({
    requestTime: time,
    message: " Hello from POST Users shop GS 🛵",
    product: req.body,
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id;
  const time = req.requestTime;
  res.json({
    requestTime: time,
    message: " Hello from GETONE Users shop GS 🛵",
    id,
  });
};

exports.createUsers = async (req, res) => {
  try {
    const { name, date, TypeRequired, quantity, price, isNew, description, } = req.body;
  const id = req.params.id;
 const product = await Product.create({
    name,
    date,
    TypeRequired,
    quantity,
    price,
    isNew,
    description
  })
    return res.status(201).json({
        message: " Hello the user is created  GS 🛵",
    product
  });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: 'Wrong'
    })
  }
  
};

exports.deleteUsers = (req, res) => {
  const id = req.params.id;
  const time = req.requestTime;
  res.json({
    requestTime: time,
    message: " Hello from DELETE Users shop GS 🛵",
    id,
  });
};
