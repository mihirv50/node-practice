const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(Path2D.join(__dirname,'public')))
app.set('view engine','ejs');


app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(3000,function(){
    console.log("running")
});