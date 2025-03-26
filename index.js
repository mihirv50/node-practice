const express = require("express");
const app = express();


app.get("/sum",(req,res)=>{
    let {a,b} = req.query;
    a = Number(a);
    b = Number(b);
    let ans = a+b;
    res.send({
        result:ans
    });
})
app.get("/substract",(req,res)=>{
    let {a,b} = req.query;
    a = Number(a);
    b = Number(b);
    let ans = a-b;
    res.send({
        result: ans
    });
})
app.get("/multiply",(req,res)=>{
    let {a,b} = req.query;
    a = Number(a);
    b = Number(b);
    let ans = a*b;
    res.send({
        result: ans
    });
})
app.get("/divide",(req,res)=>{
    let {a,b} = req.query;
    a = Number(a);
    b = Number(b);
    if(b===0){
        return res.status(400).json({
            error:"Cannot divide by 0"
        })
    }
    let ans = Math.floor(a/b);
    res.send({
        result: ans
    });
})
app.listen(3000)