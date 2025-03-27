const express = require("express");
const app = express();

let users = [];

// Random Token
const generateToken = () => {
  const options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let token = "";
  for (let i = 0; i < 32; i++) {
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
};

app.use(express.json());

// Signup End point
app.post("/signup", (req, res) => {
  let { username, password } = req.body;
  if (users.find((u) => u.username === username)) {
    res.json({
      msg: "Already signed up",
      
    });
  } else {
    users.push({
      username: username,
      password: password,
    });
    res.json({
      msg: "you are signed in",
      data:users
    });
  }
});
//SignIn end point
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (foundUser) {
    const token = generateToken();
    foundUser.token = token;
    res.json({
      msg: token,
    });
  } else {
    res.status(403).send({
      msg: "Inavalid username or Password",
    });
  }
});

app.listen(3000);
