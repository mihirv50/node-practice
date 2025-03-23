const fs = require("fs");  -> File System Modul

// To Create a file

// fs.writeFile("hey.txt","hello",(err)=>{
//     if(err) console.error(err)
//     else console.log("done")
// })

// To add data to the file

// fs.appendFile("hey.txt", "helloooo bhai kese ho?", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// To rename the file

// fs.rename("hey.txt", "new.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("changed");
// });

// To delete the file

// fs.unlink("new.txt",(err)=>{
//     if(err) console.error(err)
//     else console.log("done")
// })

// To create a new folder

// fs.mkdir("./New",(err)=>{
//     if(err) console.error(err);
//     else console.log("Creater")
// })

// fs.writeFile("./New/hey.text","Hey this is new file",(err)=>{
//     if(err) console.error(err)
//     else console.log("Done")
// })

// To read a fils

// fs.readFile("./New/hey.txt",(err,data)=>{
//         if(err) console.error(err);
//         else console.log("read",data.toString())
//     })

// To remove a folder or directory

// fs.rm("./New",{recursive:true},(err)=>{
//     if(err) console.error(err)
//     else console.log("done")
// })

import chalk from "chalk";

console.log(chalk.red("Mihir"))
console.log(chalk.green.bold("Mihir"))
console.log(chalk.blue.underline("Mihir"))




// Assignment 1
// program
//   .name("counter")
//   .description("CLI to do file based task")
//   .version("0.8.0");

// program
//   .command("count")
//   .description("count the number of characters in a string")
//   .argument("<files>", "file name characters to count")
//   .action((file)=>{ 
//     fs.readFile(file,'utf8',(err,data)=>{
//         if(err) console.error(err);
//         else{
//             const lines = data.split('\n').length;
//             console.log(`There are ${lines} lines in ${file}`)
//         }
//     })
//   })
//   program.parse();
// const getJoke = async () => {
//   const randomJoke = await getRandomJoke();
//   console.log(randomJoke);
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