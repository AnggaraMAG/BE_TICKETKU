const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/jwt");

const { Register } = require("../controllers/auth");

// router.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });

router.post('/register', Register);

module.exports = router;
