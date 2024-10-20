import mongoose from "mongoose";

const AboutSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  description2: { type: String, required: true },
});

const About = mongoose.model("About", AboutSchema);
export default About;
