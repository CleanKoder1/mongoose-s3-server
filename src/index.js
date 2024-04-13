require("dotenv").config();
const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const { port } = require("./config");
const connectDb = require("./lib/db");

const startServer = async () => {
  try {
    //connection to db
    await connectDb();
    server.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
