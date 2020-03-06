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

    // console.log(username);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const check = await User.findOne({ where: { email } });
    if (check) {
      res.status(401).send({ status: false, message: "Email Already Taken" });
    } else {
      const user = await User.create({
        roles: "user",
        name,
        email,
        password: hash,
        gender,
        phone,
        address,
        username
      });
      const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
      res.send({ message: "Success", token });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        const token = jwt.sign({ user_id: user.id }, process.env.SECRET_KEY);
        res.send({ email, token });
      } else {
        res
          .status(401)
          .send({ status: false, message: "password or email wrong" });
      }
    } else {
      res.status(401).send({ status: false, message: "email not available" });
    }
  } catch (error) {
    console.log(error);
  }
};
