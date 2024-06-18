const mongoose = require("mongoose");

const procedureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add procedure name"],
    },
    category: {
      type: String,
      required: [true, "Please add procedure category"],
    },
    date: {
      type: String,
      required: [true, "Please add procedure date"],
    },
    image: {
      type: String,
      required: [true, "Please add procedure image url"],
    },
    price: {
      type: Number,
      required: [true, "Please add procedure price"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Procedure", procedureSchema);
