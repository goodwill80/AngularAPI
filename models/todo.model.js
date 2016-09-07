var mongoose = require("mongoose");
//setup schema
var todoSchema = new mongoose.Schema({
  text: String,
  isCompleted: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);

//after setting up your model perform the following steps
//1. require mongoose & model in your routes files i.e. todos.js so that your app will be able to regconise your data structure from your schema to draw data or create data from mongo DB
//2. require model in your app.js
