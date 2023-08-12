const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://wsdeveloperspro:2gaN55W2XFpQaarp@polutionmonitering.ayryfhc.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
