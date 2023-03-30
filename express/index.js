const express = require("express");
const path = require("path");
const app = express();
const router = require("./router")
app.set("view engine","ejs");
console.log(app.get("view engine"));

console.log(path.join(__dirname),"views")

app.use(router)



app.listen(3000,()=>{
   console.log("server estblished");
   
})