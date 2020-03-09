const models = require("../models");
const User = models.user;
const Order = models.order;
const Train = models.train;

exports.Ouser = async (req, res) => {
  const id = req.user;
  try {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["password"] }
    });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};  

exports.Guser = async (req, res) => {
  const id = req.paramss;
  try {
    const user = await Order.findAll({
      where: { id }
    });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};
