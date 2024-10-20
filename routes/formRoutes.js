import express from "express";
import {
  createForm,
  getAllForms,
  // getFormById,
  updateForm,
  deleteForm,
} from "../controllers/FormController.js";

const router = express.Router();

// Define routes for Form management
router.post("/", createForm); // Create a new Form
router.get("/", getAllForms); // Get all Forms
// router.get("/:id", getFormById); // Get Form by ID
router.put("/:id", updateForm); // Update Form
router.delete("/:id", deleteForm); // Delete Form

export default router;
