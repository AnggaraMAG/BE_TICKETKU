const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/jwt");

const { Register, Login } = require("../controllers/auth");
const { Aticket, Gticket } = require("../controllers/ticket");
const { Ouser } = require("../controllers/user");
const {Gtype} = require ("../controllers/type");

router.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

//authhhhh
router.post("/register", Register);
router.post("/login", Login);

//ticket
router.post("/ticket", Aticket);
router.get("/tickets", Gticket);
//users
router.get("/user", auth, Ouser);

//type
router.get("/type", Gtype);

module.exports = router;
