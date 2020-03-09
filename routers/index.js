const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/jwt");

const { Register, Login } = require("../controllers/auth");
const { Aticket, Gticket } = require("../controllers/ticket");
const { Ouser, Guser } = require("../controllers/user");
const { Gtype } = require("../controllers/type");
const { Gorders, Porder, Dorder } = require("../controllers/order");
const { Myticket } = require("../controllers/payment");

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
router.get("/user/:id", Guser);

//order
router.get("/orders", Gorders);
router.put("/order/:id", Porder);
router.delete("/order/:id", Dorder);

//type
router.get("/type", Gtype);

//payment
router.get("/myticket", auth, Myticket);

module.exports = router;
