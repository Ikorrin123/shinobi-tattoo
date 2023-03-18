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
      data: Buffer,
      contentType: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    State: {
      type: String,
      default: "Pending",
      enum: ["accepted", "Declined", "Pending"],
    },
  },
  { timestamps: true }
);
module.exports = model("calendar", calendarSchema);
