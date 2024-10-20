import About from "../models/About.js";

// Create new "About" document
export const createAbout = async (req, res) => {
  const { title, description, description2 } = req.body;

  try {
    const newAbout = new About({ title, description, description2 });
    await newAbout.save();
    res.status(201).json(newAbout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Get all "About" documents
export const getAllAbouts = async (req, res) => {
  try {
    const abouts = await About.find();
    res.status(200).json(abouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get "About" document by ID
export const getAboutById = async (req, res) => {
  const { id } = req.params;

  try {
    const about = await About.findById(id);
    if (!about) return res.status(404).json({ message: "About not found" });
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update an "About" document by ID
export const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { title, description, description2 } = req.body;

  try {
    const updatedAbout = await About.findByIdAndUpdate(
      id,
      { title, description, description2 },
      { new: true, runValidators: true }
    );

    if (!updatedAbout)
      return res.status(404).json({ message: "About not found" });

    res.status(200).json(updatedAbout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Delete an "About" document by ID
export const deleteAbout = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAbout = await About.findByIdAndDelete(id);

    if (!deletedAbout)
      return res.status(404).json({ message: "About not found" });

    res.status(200).json({ message: "About deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
