import mongoose from 'mongoose';

// Connection to mongodb.
const url='mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/?retryWrites=true&w=majority&appName=EmployeMSystem';

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      // No need for useNewUrlParser and useUnifiedTopology
    });
    console.log("Connected to MongoDB using Mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};