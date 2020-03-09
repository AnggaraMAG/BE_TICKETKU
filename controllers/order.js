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

exports.Porder = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const update = await Order.update(
      {
        status: data
      },
      {
        where: { id }
      }
    );
    res.send({
      message: succes,
      data: update
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Dorder = async (req, res) => {
  try {
    const { id } = req.params;
    const Dorder = await Order.destroy({ where: { id } });
    res.send({
      message: succes,
      data: Dorder
    });
  } catch (error) {
    console.log(error);
  }
};
