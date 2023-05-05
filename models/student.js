const mongoose = require("mongoose");
const student = mongoose.Schema({
  name: { type: String, required: true },

  role: {
    type: String,
    required: true
  },
  group: {
    type: Number,
    default: 1
  },
  isDeleted: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,

    default: Date.now
  }
});
module.exports = mongoose.model("student", student);
