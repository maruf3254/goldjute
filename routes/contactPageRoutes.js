import express from "express";
import {
  getContactPage,
  updateContactPage,
} from "../controllers/contactControllers.js"; // Adjust the import path accordingly

const router = express.Router();

router.get("/", getContactPage);
router.put("/", updateContactPage); // Assuming you're sending a PUT request to update

export default router;
