const express = require("express");
const router = express.Router()



router.get("/", (req,res)=>{
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