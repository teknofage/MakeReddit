const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true }
}, {timestamps: {createdAt: 'created_at'}});

module.exports = mongoose.model("Post", PostSchema);