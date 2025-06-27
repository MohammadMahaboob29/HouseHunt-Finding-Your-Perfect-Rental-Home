const User = require('../schemas/userModel');

exports.approveOwner = async (req, res) => {
  const { userId } = req.body;
  await User.findOneAndUpdate({ userId }, { type: 'owner' });
  res.json({ message: 'Owner approved successfully' });
};