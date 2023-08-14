const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb Database `
    );
  } catch (error) {
    console.log(`Connection Error ${error}`);
  }
};

module.exports = connectDB;
