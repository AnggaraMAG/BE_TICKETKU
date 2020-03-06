const models = require("../models");
const User = models.user;

exports.Ouser = async (req, res) => {
  const id = req.user;
  try {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["password"] }
    });
    res.send({ data: user });
  } catch (error) {
    // console.log(error);
  }
};
