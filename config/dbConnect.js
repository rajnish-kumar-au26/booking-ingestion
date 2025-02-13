const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB_Connected");
  } catch (error) {
    console.log(`Getting error while db connection`, error);
  }
}

module.exports = dbConnect;
