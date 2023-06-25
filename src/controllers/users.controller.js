const User = require('../models/user.model');
const generateJWT = require('../utils/jwt');
const bcrypt = require('bcryptjs');

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'available',
      },
    });
    return res.status(200).json({
      status: 'success',
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong 🔴',
    });
  }
};

exports.findUser = async (req, res) => {
  try {
    const { user } = req;
    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong 🔴',
    });
  }
};

exports.createUsers = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    const token = generateJWT(user.id);
    return res.status(200).json({
      status: 'success',
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong 🔴',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { user } = req;
    const { name, email } = req.body;

    await user.update({ name, email });
    return res.status(200).json({
      status: 'success',
      message: 'user updated ',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong 🔴',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { user } = req;
    await user.update({ status: 'disabled' });
    return res.status(200).json({
      status: 'success',
      message: 'user delete',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went wrong 🔴',
    });
  }
};

exports.login = async (req, res, next) => {
  const { user } = req;
  const { password } = req.body;

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({
      status: 'error',
      message: 'Information incorrect 😑',
    });
  }
  const token = await generateJWT(user.id);
  res.status(200).json({
    status: 'success',
    token,
    user,
  });
};
