const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randommihir"

let users = [];

// Random Token
// const generateToken = () => {
//   const options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];
//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }; --- using jwt now

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
      msg: "you are signed up",
    });
  }
  console.log(users);
});
//SignIn end point
app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (foundUser) {
    // const token = generateToken();
    const token = jwt.sign({
      username:username
    },JWT_SECRET)
    // foundUser.token = token; --> using jwt now
    res.json({
      msg: token,
    });
  } else {
    res.status(403).send({
      msg: "Inavalid username or Password",
    });
  }
  console.log(users);
});

// User Profile --> Authenticated endpoint

app.get("/me",(req,res)=>{
  const token = req.headers.token;
  const decodedinformation = jwt.verify(token,JWT_SECRET);
  const username = decodedinformation.username;
  let foundUser = users.find(u=>u.username===username);
  if(foundUser){
    res.json({
      username:foundUser.username,
    })
  }else{
    res.status(404).send({
      msg:Invalid
    })
  }
})

app.listen(3000);
