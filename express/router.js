const express = require("express");
const router = express.Router();
const middleware = require("./middleware");



router.get("/",middleware, (req,res)=>{
    // res.send("this is express server");
    res.render("ind",{
        title:"index"
    });
})

router.get("/about", (req,res)=>{
    // res.send("this is About Page");
    res.render("home",{
        title:"home"
    })
})


module.exports= router