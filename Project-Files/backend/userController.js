const User = require('../schemas/userModel');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { name, email, password, type } = req.body;
  const user = new User({ userId: Date.now().toString(), name, email, password, type });
  await user.save();
  const token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET);
  res.status(201).json({ message: 'User registered successfully', token });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

exports.getProperties = async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
};