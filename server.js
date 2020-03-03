require("dotenv").config();
const express = require("express");

const app = express();
const cors = require("cors");

const port = process.env.PORT;
const router = require("./routers/index");

app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () => console.log(`listening on port ${port}!`));
