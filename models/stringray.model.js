const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StringraySchema = new Schema({
  name: { type: String, required: true, max: 100 },
  nickname: { type: String, required: true, max: 100 },
  img: { type: String, required: true, max: 100 },
  pitch: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  orphan: { type: String, required: true, max: 100 },
  vimdiesel: { type: String, required: true, max: 100 }
});

// Export the model
module.exports = mongoose.model("STRINGray", StringraySchema);
