import mongoose from "mongoose";

export const ConnectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://localhost:27017"
    );

    console.log(
      `MongoDB Connection Established: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};
