const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  required: true,
});

module.exports = mongoose.model("Author", authorSchema);
