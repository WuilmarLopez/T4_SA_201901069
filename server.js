require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
const authRoutes = require("./routes/auth.routes");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
