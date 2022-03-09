const express = require("express");
const router = express.Router();
const Author = require("../models/author");

//All authors routes

router.get("/", (req, res) => {
  res.render("authors/index");
});

//New Author Rout
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

router.post("/", (req, res) => {
  res.send("Create");
});
module.exports = router;
