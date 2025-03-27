const express = require("express");
const app = express();

let requestCount = 0;

app.use((req, res, next) => {
  requestCount += 1;
    next();
});

// Middleware to log the method , timestamp and url

app.use((req,res,next)=>{
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();;
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
})

app.get("/count",(req,res)=>{
    res.json({
        count:requestCount
    })
})
app.get("/sum/:a/:b", (req, res) => {
  let { a, b } = req.params;
  a = Number(a);
  b = Number(b);
  let ans = a + b;
  res.send({
    result: ans,
  });
});
app.get("/substract/:a/:b", (req, res) => {
  let { a, b } = req.params;
  a = Number(a);
  b = Number(b);
  let ans = a - b;
  res.send({
    result: ans,
  });
});
app.get("/multiply/:a/:b", (req, res) => {
  let { a, b } = req.params;
  a = Number(a);
  b = Number(b);
  let ans = a * b;
  res.send({
    result: ans,
  });
});
app.get("/divide/:a/:b", (req, res) => {
  let { a, b } = req.params;
  a = Number(a);
  b = Number(b);
  if (b === 0) {
    return res.status(400).json({
      error: "Cannot divide by 0",
    });
  }
  let ans = Math.floor(a / b);
  res.send({
    result: ans,
  });
});
app.listen(3000);
