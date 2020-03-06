const models = require("../models");
const Type = models.type;

exports.Gtype = async (req, res) => {
    try {
      const types = await Type.findAll();
      res.status(200).send({
        status: true,
        message: "success get all",
        data: types
      });
    } catch (error) {
      console.log(error);
    }
  };