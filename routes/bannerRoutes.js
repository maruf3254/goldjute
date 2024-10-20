import express from "express";
import {
  getBannerContent,
  updateBannerContent,
  getAllBanners,
} from "../controllers/bannerController.js";

const router = express.Router();

router.get("/", getAllBanners);

// Get banner content
router.get("/:id", getBannerContent);

// Update banner content by ID
router.put("/:id", updateBannerContent);

export default router;
