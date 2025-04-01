const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;

mongoose.connect(`mongodb://127.0.0.1:27017/todo-app-database`);

const userSchema = mongoose.Schema({
  name: String,
  email: {type: String , unique: true},
  password: String,
});

const todoSchema = mongoose.Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

const userModel = mongoose.model("users", userSchema);
const todoModel = mongoose.model("todos", todoSchema);

module.exports = {
  userModel,
  todoModel,
};
