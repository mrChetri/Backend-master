const express = require("express");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/postRoutes");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
