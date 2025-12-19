const express = require("express");
const router = express.Router();
const Client = require("../models/client");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });


router.post("/", upload.single("image"), async (req, res) => {
  const client = new Client({
    name: req.body.name,
    designation: req.body.designation,
    description: req.body.description,
    image: req.file.filename,
  });
  await client.save();
  res.json(client);
});


router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

module.exports = router;
