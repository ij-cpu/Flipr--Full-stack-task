const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 🔗 ROUTES
app.use("/projects", require("./routes/projectRoutes"));
app.use("/clients", require("./routes/clientRoutes"));
app.use("/contact", require("./routes/contactRoutes"));
app.use("/subscribe", require("./routes/subscriberRoutes"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));
