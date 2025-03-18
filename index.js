const { Command } = require("commander");
const fs = require("fs");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based task")
  .version("0.8.0");

program
  .command("count")
  .description("count the number of characters in a string")
  .argument("<files>", "file name characters to count")
  .action((file)=>{
    fs.readFile(file,'utf8',(err,data)=>{
        if(err) console.error(err);
        else{
            const lines = data.split('\n').length;
            console.log(`There are ${lines} lines in ${file}`)
        }
    })
  })
  program.parse();
