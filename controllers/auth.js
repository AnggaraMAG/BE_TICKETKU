const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.Register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const check = await User.findOne({ where: { email } });
    if (check) {
      res.status(401).send({ status: false, message: "Email Already Taken" });
    } else {
      const user = await User.create({
        name,
        username,
        email,
        password: hash,
        gender,
        phone,
        address
      });
      const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
      res.send({ message: "Success", token });
    }
  } catch (error) {
    console.log(error);
  }
};
