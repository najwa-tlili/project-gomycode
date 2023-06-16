import mongoose from "mongoose";

const Connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB, { family: 4 });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Could not connect to MongoDB: ${error.message}`);
  }
};

export default Connection;
