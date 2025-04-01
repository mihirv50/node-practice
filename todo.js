const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const { userModel, todoModel } = require("./userModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randommihir";
const {z} = require('zod')

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
  const requiredBody = z.object({
    email: z.string().min(3).max(15).email(),
    name: z.string().min(3).max(20),
    password: z.string().min(8).max(20)
  })
  // const parsedData = requiredBody.parse(req.body)
  //OR
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  if(!parsedDataWithSuccess.success){
      res.json({
        msg:"Incorrect format",
        error:parsedDataWithSuccess.error
      })
      return
  }
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
  }

  res.json({
    msg: "You are signed Up",
  });
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
  });
  if (!user) {
    res.status(403).json({
      msg: "User does not exist",
    });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  console.log(user);
  if (passwordMatch) {
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
  const { title } = req.body;
  const userId = req.userId;
  todoModel.create({
    title: title,
    userId: userId,
  });
  res.json({
    id: userId,
  });
});
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await todoModel.find({
    userId: userId,
  });
  res.json({
    todos,
  });
});

app.listen(3000);
