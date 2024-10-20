import mongoose from "mongoose";

const homeSchema = mongoose.Schema(
  {
    bannerImg: { type: String, required: true }, // Image URL for the banner
    bannerText: { type: String, required: true }, // Banner heading text
    secondColumnTitle: { type: String, required: true }, // Title for the second section
    secondParagraph1: { type: String, required: true }, // First paragraph in the second section
    secondParagraph2: { type: String, required: true }, // Second paragraph in the second section
    secondImage: { type: String, required: true }, // URL of the image in the second section
    thirdParagraph1: { type: String, required: true }, // First paragraph in the third section
    thirdParagraph2: { type: String, required: true }, // Second paragraph in the third section
    thirdImage: { type: String, required: true }, // Image URL in the third section
    fourthParagraph: { type: String, required: true }, // Fourth paragraph in the content
    fifthParagraph1: { type: String, required: true }, // Fifth section first paragraph
    fifthParagraph2: { type: String, required: true }, // Fifth section second paragraph
    fifthImage: { type: String, required: true }, // Image in the fifth section
    finalContent: { type: String, required: true }, // Final concluding paragraph
  },
  { timestamps: true } // Automatically handle `createdAt` and `updatedAt`
);

const Home = mongoose.model("Home", homeSchema);

export default Home;
