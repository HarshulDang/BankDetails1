const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    ifsc: String,
    bank_id: Number,
    branch: String,
    address: String,
    city: String,
    district: String,
    state: String,
    bank_name: String

  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);