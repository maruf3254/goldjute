import path from "path";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
// import contactRoutes from "./routes/contactRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import contactPageRoutes from "./routes/contactPageRoutes.js";
import cors from "cors";

const port = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || "*", // Default to '*' if CORS_ORIGIN is not set
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/home", homeRoutes);
// app.use("/api/contact", contactRoutes);
app.use("/api/banner", bannerRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactPageRoutes);
app.use("/api/form", formRoutes);

// Development fallback for serving an initial response
app.get("/", (req, res) => {
  res.send("API is running....");
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
