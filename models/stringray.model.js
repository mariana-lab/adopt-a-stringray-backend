const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StringraySchema = new Schema({
  name: { type: String, required: true, max: 100 },
  nickname: { type: String, unique: true, required: true, max: 100 },
  img: { type: String, required: true, max: 100 },
  pitch: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  orphan: { type: Boolean, required: true },
  vimdiesel: { type: String, required: true, max: 100 }
});

// Export the model
module.exports = mongoose.model("stringray", StringraySchema);
