const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");

// Connect to the database
connectDB();

const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
