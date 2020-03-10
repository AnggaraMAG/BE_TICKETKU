const jwt = require("jsonwebtoken");
const models = require("../models");

const Order = models.order;
const User = models.user;
const Type = models.type;
const Train = models.train;

exports.Myticket = async (req, res) => {
  // const token = req.header("Authorization").replace("Bearer ", "");
  // const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const myticket = await Order.findAll({
      where: { user_id: req.user },
      include: [
        User,
        { model: Train, include: [{ model: Type, attributes: ["name"] }] }
      ]
    });
    res.status(200).send({
      message: "succes get order",
      data: myticket
    });
  } catch (error) {
    console.log(error);
  }
};
