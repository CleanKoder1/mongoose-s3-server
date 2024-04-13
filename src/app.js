const express = require("express");
const cors = require("cors");

const app = express();
//IMPORT ROUTES
const routes = require("./routes");
//IMPORT MIDDLEWARE
const handlingError = require("./middleware/handlingError");
app.use(cors());
app.use(express.json());
app.use("/v1/uploadimages-app", routes);
app.use(handlingError);

module.exports = app;
