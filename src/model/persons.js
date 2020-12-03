import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
});

export default mongoose.model("persons", schema);
