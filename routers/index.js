const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/jwt");
const { upload } = require("../middleware/upload");

const { Register, Login } = require("../controllers/auth");
const { Aticket, Gticket } = require("../controllers/ticket");
const { Ouser, Guser } = require("../controllers/user");
const { Gtype } = require("../controllers/type");
const {
  Gorders,
  Porder,
  Dorder,
  paymentproof,
  Corder,
  Tticket
} = require("../controllers/order");
const { Myticket } = require("../controllers/payment");
const { Search } = require("../controllers/search");

router.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

//Note = O:FindOne \ G:Get | A:Add |P:Put |D:delete | C:Create
//authhhhh
router.post("/register", Register);
router.post("/login", Login);

//ticket
router.post("/ticket", Aticket);
router.get("/tickets", Gticket);
// router.get("tickets/search", Searchticket);
//users
router.get("/user", auth, Ouser);
router.get("/user/:id", Guser);

//order
router.get("/orders", Gorders);
router.put("/order/:id", Porder);
router.delete("/order/:id", Dorder);
router.post("/upload/:id", upload.single("payment"), paymentproof);

router.post("/order", auth, Tticket);

//type
router.get("/type", Gtype);

//payment
router.get("/myticket", auth, Myticket);

//searching
router.get("/searching", Search);

module.exports = router;
