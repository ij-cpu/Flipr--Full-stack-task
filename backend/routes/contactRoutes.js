const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");


router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});


router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = router;
