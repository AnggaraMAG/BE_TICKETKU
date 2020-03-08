const models = require("../models");
const Order = models.order;
const User = models.user;
const Ticket = models.train;

exports.Gorders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [User, Ticket]
    });
    res.status(200).send({
      status: true,
      message: "success get all",
      data: orders
    });
  } catch (error) {
    console.log(error);
  }
};
