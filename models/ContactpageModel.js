import mongoose from "mongoose";

const contactPageSchema = mongoose.Schema(
  {
    bannerimg: { type: String, required: true },
    bannertext: { type: String, required: true },
    herotext: { type: String, required: true },
    heroparagraph: { type: String, required: true },
    Address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    facebooklink: { type: String, required: true },
    twitterlink: { type: String, required: true },
    instalink: { type: String, required: true },
    maplink: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const contactPage = mongoose.model("contactPage", contactPageSchema);

export default contactPage;
