import Home from "../models/homeModel.js";

// Function to get home content
export const getHomeContent = async (req, res) => {
  try {
    const homeContent = await Home.findOne(); // Find the first entry (adjust logic if needed)

    if (!homeContent) {
      return res.status(404).json({ message: "No content found" });
    }

    res.status(200).json(homeContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update home content
export const updateHomeContent = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    // Find the document by ID and update it
    const updatedContent = await Home.findByIdAndUpdate(id, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is run
    });

    if (!updatedContent) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
