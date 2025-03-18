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