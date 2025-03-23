const express = require("express");
const app = express();

let users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];
app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numofKidneys = johnKidneys.length;
  const numofHealthyKidneys = johnKidneys.filter(
    (kideny) => kideny.healthy
  ).length;
  const numofunhealthyKidneys = numofKidneys - numofHealthyKidneys;

  res.json({ numofKidneys, numofHealthyKidneys, numofunhealthyKidneys });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});
app.put("/", (req, res) => {
  users[0].kidneys = users[0].kidneys.map(kidney=>({...kidney,healthy:true}));
  res.json({});
});
app.delete("/", (req, res) => {
  users[0].kidneys = users[0].kidneys.filter(kidney=>kidney.healthy);
  res.json("done");
});

app.listen(3000);
