const mongoose = require("mongoose");
const validator = require("validator");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },

  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },
});

// create new collection

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;
