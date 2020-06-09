const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: { type: String, require: true },
  content: { type: String, require: true },
  image: { type: String },
  date: { type: Date, default: Date.now },
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("article", articleSchema);
