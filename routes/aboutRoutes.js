import express from "express";
import {
  createAbout,
  getAllAbouts,
  getAboutById,
  updateAbout,
  deleteAbout,
} from "../controllers/aboutController.js";

const router = express.Router();

router.post("/", createAbout); // Create
router.get("/", getAllAbouts); // Get All
router.get("/:id", getAboutById); // Get By ID
router.put("/:id", updateAbout); // Update
router.delete("/:id", deleteAbout); // Delete

export default router;
