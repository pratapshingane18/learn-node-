const express = require("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");
console.log(app.get("view engine"));

console.log(path.join(__dirname),"views")

app.get("/", (req,res)=>{
    // res.send("this is express server");
    res.render("ind",{
        title:"index"
    });
})

app.get("/about", (req,res)=>{
    // res.send("this is About Page");
    res.render("home",{
        title:"home"
    })
})



app.listen(3000,()=>{
   console.log("server estblished");
   
})