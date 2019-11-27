const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let VimdieselSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  nickname: { type: String, required: true, max: 100 },
  img: { type: String, required: true, max: 100 },
  pitch: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100 },
  stringrays: { type: [String] }
});

// Export the model
module.exports = mongoose.model("VIMdiesel", VimdieselSchema);
