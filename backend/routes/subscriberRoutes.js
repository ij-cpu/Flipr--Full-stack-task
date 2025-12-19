const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");


router.post("/", async (req, res) => {
  const sub = new Subscriber(req.body);
  await sub.save();
  res.json(sub);
});


router.get("/", async (req, res) => {
  const subs = await Subscriber.find();
  res.json(subs);
});

module.exports = router;
