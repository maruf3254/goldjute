import Form from "../models/Form.js";

// Create a new Form
export const createForm = async (req, res) => {
  console.log("dfdf");
  try {
    const newForm = new Form(req.body);
    console.log(newForm);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Forms
export const getAllForms = async (req, res) => {
  try {
    const Forms = await Form.find();
    res.status(200).json(Forms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a Form by ID
// export const getFormById = async (req, res) => {
//   try {
//     const Form = await Form.findById(req.params.id);
//     if (!Form) {
//       return res.status(404).json({ error: "Form not found" });
//     }
//     res.status(200).json(Form);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Update a Form
export const updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Form
export const deleteForm = async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);
    if (!deletedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
