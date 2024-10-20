import ContactPageModel from "../models/ContactpageModel.js"; // Rename the import for clarity

// Function to get the contact page
export const getContactPage = async (req, res) => {
  try {
    const contactPage = await ContactPageModel.findOne(); // Use the renamed model

    if (!contactPage) {
      return res.status(404).json({ message: "Contact page not found" });
    }
    return res.status(200).json(contactPage);
  } catch (error) {
    console.error("Error fetching contact page:", error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "Server error", error: error.message }); // Return the error message
  }
};

// Function to update the contact page
export const updateContactPage = async (req, res) => {
  try {
    const {
      bannerimg,
      bannertext,
      herotext,
      heroparagraph,
      Address,
      phone,
      email,
      facebooklink,
      twitterlink,
      instalink,
      maplink,
    } = req.body;

    // Find the existing contact page document
    const contactPage = await ContactPageModel.findOne();

    if (!contactPage) {
      return res.status(404).json({ message: "Contact page not found" });
    }

    // Update the document with the new values
    contactPage.bannerimg = bannerimg;
    contactPage.bannertext = bannertext;
    contactPage.herotext = herotext;
    contactPage.heroparagraph = heroparagraph;
    contactPage.Address = Address;
    contactPage.phone = phone;
    contactPage.email = email;
    contactPage.facebooklink = facebooklink;
    contactPage.twitterlink = twitterlink;
    contactPage.instalink = instalink;
    contactPage.maplink = maplink;

    // Save the updated document
    await contactPage.save();

    return res
      .status(200)
      .json({ message: "Contact page updated successfully" });
  } catch (error) {
    console.error("Error updating contact page:", error); // Log the error for debugging
    return res
      .status(500)
      .json({ message: "Server error", error: error.message }); // Return the error message
  }
};
