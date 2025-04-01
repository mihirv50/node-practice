const express = require("express");
const app = express();
const { userModel, todoModel } = require("./userModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randommihir";

app.use(express.json());

const auth = (req, res, next) => {
  const token = req.headers.token;

  const response = jwt.verify(token, JWT_SECRET);

  if (response) {
    req.userId = response.id;
    next();
  } else {
    res.status(403).json({
      msg: "Incorrect Credentials",
    });
  }
};

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  await userModel.create({
    name: name,
    email: email,
    password: password,
  });
  res.json({
    msg: "You are signed Up",
  });
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password,
  });
  console.log(user);
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Incorrect Credentials",
    });
  }
});
app.post("/todo", auth, (req, res) => {
  const {title} = req.body;
  const userId = req.userId;
  todoModel.create({
    title:title,
    userId:userId
  })
  res.json({
    id: userId,
  });
});
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await todoModel.find({
    userId:userId
  })
  res.json({
    todos
  })
});

app.listen(3000);
