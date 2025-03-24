const express = require("express");
const app = express();

const checkAge = (age) => {
  if (age > 14) {
    return true;
  } else {
    return false;
  }
};
const checkAgeMiddleware = (req, res, next) => {
  let age = req.query.age;
  if (age > 14) {
    next();
  } else {
    res.json({
      msg: "Sorry! Not eligible",
    });
  }
};

app.get("/", checkAgeMiddleware, (req, res) => {
  res.send("Welcome to the Park");
});
app.use(checkAgeMiddleware)
app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have done ride 1",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have done ride 2",
  });
});

app.get("/ride3", (req, res) => {
  res.json({
    msg: "You have done ride 3",
  });
});

app.listen(3000);
