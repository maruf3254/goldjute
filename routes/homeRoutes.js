import express from "express";
import {
  getHomeContent,
  updateHomeContent,
} from "../controllers/homeController.js";

const router = express.Router();

// Get home content
router.get("/", getHomeContent);

// Update home content by ID
router.put("/:id", updateHomeContent);

export default router;
