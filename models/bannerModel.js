import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    Bgimg: { type: String, required: true }, // Background image URL
    bannerTitle: { type: String, required: true }, // Main title on the banner
    title: { type: String, required: true }, // Subtitle or additional title
    description: { type: String, required: true }, // Description or text on the banner
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
