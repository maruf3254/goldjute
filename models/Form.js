import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    user_email: { type: String, required: true },
    message: { type: String, required: true },
    isFormed: { type: Boolean, default: false },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt timestamps

const Form = mongoose.model("Form", FormSchema);
export default Form;
