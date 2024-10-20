import Banner from "../models/bannerModel.js";

// Function to get banner content
export const getBannerContent = async (req, res) => {
  const { id } = req.params;

  try {
    const bannerContent = await Banner.findById(id); // Find the first banner (adjust logic if needed)

    if (!bannerContent) {
      return res.status(404).json({ message: "Banner content not found" });
    }

    res.status(200).json(bannerContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update banner content
export const updateBannerContent = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    // Find the banner by ID and update it
    const updatedBanner = await Banner.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is run
    });

    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner content not found" });
    }

    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to get all banner content
export const getAllBanners = async (req, res) => {
  try {
    const banners = await Banner.find(); // Fetch all banners

    if (!banners.length) {
      return res.status(404).json({ message: "No banners found" });
    }

    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
