// const jwt = require("jsonwebtoken");
const models = require("../models");
const Ticket = models.train;
const Type = models.type;

exports.Aticket = async (req, res) => {
  try {
    const {
      nameTrain,
      type_id,
      dateStart,
      stationStart,
      timeStart,
      destinationStation,
      timeArrival,
      station1,
      station2,
      price,
      qty
    } = req.body;
    const ticket = await Ticket.create({
      nameTrain,
      type_id,
      dateStart,
      stationStart,
      timeStart,
      destinationStation,
      timeArrival,
      station1,
      station2,
      price,
      qty
    });
    res.status(201).send({
      status: true,
      message: "Succes add new ticket",
      data: ticket
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Gticket = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [Type]
    });
    res.status(200).send({
      status: true,
      message: "success get all",
      data: tickets
    });
  } catch (error) {
    console.log(error);
  }
};
