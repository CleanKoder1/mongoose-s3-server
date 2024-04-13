const crypto = require("crypto");

function getRandomImageName(bytes = 32) {
  return crypto.randomBytes(bytes).toString("hex");
}

module.exports = { 
    getRandomImageName
}