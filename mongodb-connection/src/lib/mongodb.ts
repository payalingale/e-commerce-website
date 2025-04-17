import mongoose from "mongoose";

const mongodbUri =
  "mongodb+srv://admin123:admin123@cluster0.eabgoea.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongodbName = "testing";

if (!mongodbUri) {
  throw new Error("MongoDb uri not set");
}

if (!mongodbName) {
  throw new Error("Mongodb name  not set");
}

export default async function connectDb() {
  try {
    mongoose.connect(mongodbUri, { dbName: mongodbName });
    console.log("MONGODB CONNECTION SUCCESSFULL");
  } catch (err) {
    console.log(err);
  }
}
