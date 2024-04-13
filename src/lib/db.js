const mongoose = require("mongoose");
const { atlasConnection } = require("../config");

function connectDb() {
  return mongoose.connect(atlasConnection, {});
}

module.exports = connectDb;
