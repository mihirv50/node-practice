const express = require("express");
const app = express();


app.get("/sum/:a/:b",(req,res)=>{
    let {a,b} = req.params;
    a = Number(a);
    b = Number(b);
    let ans = a+b;
    res.send({
        result:ans
    });
})
app.get("/substract/:a/:b",(req,res)=>{
    let {a,b} = req.params;
    a = Number(a);
    b = Number(b);
    let ans = a-b;
    res.send({
        result: ans
    });
})
app.get("/multiply/:a/:b",(req,res)=>{
    let {a,b} = req.params;
    a = Number(a);
    b = Number(b);
    let ans = a*b;
    res.send({
        result: ans
    });
})
app.get("/divide/:a/:b",(req,res)=>{
    let {a,b} = req.params;
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