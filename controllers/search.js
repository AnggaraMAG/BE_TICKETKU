const models = require("../models");

const Search = models.train;
const { Op } = require("sequelize");

exports.Search = async (req, res) => {
  const { stationawal, stationakhir } = req.query;
  try {
    const search = await Search.findAll({
      where: {
        station1: { [Op.startsWith]: `%${stationawal}` },
        station2: { [Op.startsWith]: `%${stationakhir}` }
      }
    });

    res.send({ message: "success", data: search });
  } catch (err) {
    console.log(err);
  }
};
