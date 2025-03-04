//here we are connecting to the database using mongoose
// //mongoose.connect() method is used to connect to the MongoDB database.

import mongoose from 'mongoose';
//import dotenv to access the environment variables.URI ek tynne .env file eke
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
  catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);//1 is for exit with failure

  }
}