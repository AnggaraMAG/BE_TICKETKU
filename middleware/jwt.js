const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.auth = async (req, res, next) => {
  try {
    // console.log('hi');
    const token = req.header("Authorization").replace("Bearer ", "");
    // console.log(req);
    const data = jwt.verify(token, process.env.SECRET_KEY);
    console.log(data);
    const user = await User.findOne({ where: { id: data.user_id } });
    if (!user) {
      throw new Error();
    }
    req.user = user.id;

    req.token = token;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ error: "Authorization not Allowed" });
  }
};
