const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage });


router.post("/", upload.single("image"), async (req, res) => {
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    image: req.file.filename,
  });
  await project.save();
  res.json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
