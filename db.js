import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOPROD, {});
    console.log(`connection successfull`);
  } catch (error) {
    console.log(error.message);
  }
};
export default connectDb;
