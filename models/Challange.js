const mongoose = require('mongoose');
const { Schema } = mongoose;
const challangeSchema = new Schema({
  title: String,
  repsAmount: Number,
  finished: Boolean
});

mongoose.model('ChellangeSchema', challangeSchema);
