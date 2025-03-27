const fs = require("fs"); -> File System Modul

// To Create a file

// fs.writeFile("hey.txt","hello",(err)=>{
// if(err) console.error(err)
// else console.log("done")
// })

// To add data to the file

// fs.appendFile("hey.txt", "helloooo bhai kese ho?", function (err) {
// if (err) console.error(err);
// else console.log("done");
// });

// To rename the file

// fs.rename("hey.txt", "new.txt", (err) => {
// if (err) console.error(err);
// else console.log("changed");
// });

// To delete the file

// fs.unlink("new.txt",(err)=>{
// if(err) console.error(err)
// else console.log("done")
// })

// To create a new folder

// fs.mkdir("./New",(err)=>{
// if(err) console.error(err);
// else console.log("Creater")
// })

// fs.writeFile("./New/hey.text","Hey this is new file",(err)=>{
// if(err) console.error(err)
// else console.log("Done")
// })

// To read a fils

// fs.readFile("./New/hey.txt",(err,data)=>{
// if(err) console.error(err);
// else console.log("read",data.toString())
// })

// To remove a folder or directory

// fs.rm("./New",{recursive:true},(err)=>{
// if(err) console.error(err)
// else console.log("done")
// })

import chalk from "chalk";

console.log(chalk.red("Mihir"))
console.log(chalk.green.bold("Mihir"))
console.log(chalk.blue.underline("Mihir"))

// Assignment 1
// program
// .name("counter")
// .description("CLI to do file based task")
// .version("0.8.0");

// program
// .command("count")
// .description("count the number of characters in a string")
// .argument("<files>", "file name characters to count")
// .action((file)=>{
// fs.readFile(file,'utf8',(err,data)=>{
// if(err) console.error(err);
// else{
// const lines = data.split('\n').length;
// console.log(`There are ${lines} lines in ${file}`)
// }
// })
// })
// program.parse();
// const getJoke = async () => {
// const randomJoke = await getRandomJoke();
// console.log(randomJoke);
// };
// getJoke();

let todos = [];
let idCounter = 0;

app.get("/", (req, res) => {
res.send("Welcome to TODO");
});

app.post("/create", (req, res) => {
// Create a random id for the todo
// Extract the todo title from the body
const newTodo = req.query.newTodo;
todos.push(newTodo);
});
app.get("/todos", (req, res) => {
res.send(todos);
});
app.delete("/delete", (req, res) => {
// extract the todo id
// remove the todo from here
todos.splice({});
});
app.put("/update", (req, res) => {
todos.push({});
});

app.listen(3000);

Hospital Game

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

TODO App

const express = require('express');
const app = express();

app.use(express.json());

let todo = [
    { id: 1, task: "Wake up at 8am" }
];

// GET: Retrieve all tasks
app.get("/", (req, res) => {
    res.json(todo);
});

// POST: Add a new task
app.post("/", (req, res) => {
    const { id, task } = req.body;
    if (!id || !task) {
        return res.status(400).json({ error: "ID and task are required" });
    }
    todo.push({ id, task });
    res.json({ message: "Task added successfully", todo });
});

// PUT: Update a specific task by ID
app.put("/", (req, res) => {
    const { id, task } = req.body;
    if (!id || !task) {
        return res.status(400).json({ error: "ID and task are required for updating" });
    }
    todo = todo.map(t => (t.id === id ? { ...t, task } : t));
    res.json({ message: "Task updated successfully", todo });
});

// DELETE: Remove a specific task by ID
app.delete("/", (req, res) => {
    const id = parseInt(req.query.id);
    if (!id) {
        return res.status(400).json({ error: "ID is required for deletion" });
    }
    const initialLength = todo.length;
    todo = todo.filter(t => t.id !== id);
    
    if (todo.length === initialLength) {
        return res.status(404).json({ error: "Task not found" });
    }

    res.json({ message: "Task deleted successfully", todo });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});





const express = require("express");
const app = express();

let requestCount = 0;

app.use((req, res, next) => {
  requestCount += 1;
    next();
});
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
