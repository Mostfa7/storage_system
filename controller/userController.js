const User = require ('../model/userModel');

exports.createUser = async (req, res) => {
  try {
    console.log (req.body);
    const user = await User.create (req.body);
    res.status (201).json ({
      status: 'succes',
      user,
    });
  } catch (err) {
    console.log (err);
  }
};
