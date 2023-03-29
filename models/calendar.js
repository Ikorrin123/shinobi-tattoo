const { string } = require("joi");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const calendarSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    pickedDay: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },

    file: {
      type: String,
      required: true,
    },
    contentType: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    State: {
      type: String,
      default: "Pending",
      enum: ["accepted", "declined", "Pending"],
    },
  },
  { timestamps: true }
);
module.exports = model("calendar", calendarSchema);
