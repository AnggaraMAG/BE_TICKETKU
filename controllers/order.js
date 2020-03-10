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

exports.paymentproof = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.params;
    if (!filename) {
      res.status(400).json({
        status: "failed",
        message: "Please Upload File"
      });
    } else {
      await Order.update(
        {
          attachment: filename
        },
        { where: { id } }
      );
      res.status(200).json({
        status: "success",
        message: "file upload successfully",
        data: filename
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.Corder = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [User, Ticket]
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Tticket = async (req, res) => {
  const {
    ticket_id,
    user_id,
    qty,
    qtybaby,
    adultprice,
    babyprice,
    totalprice
  } = req.body;
  const status = "Pending";
  try {
    const x = await Order.create({
      ticket_id,
      user_id,
      qty,
      qtybaby,
      adultprice,
      babyprice,
      totalprice,
      status
    });
    res.send({ data: x });
  } catch (error) {
    console.log(error);
  }
};
