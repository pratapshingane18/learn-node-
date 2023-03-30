const http =require("http")
const server = http.createServer((req,res)=>{
const  fs = require("fs")

const jsondata = fs.readFileSync("api.json", "utf-8")
const objdata = JSON.parse(jsondata)
    if(req.url =="/" ){
    res.end("Hi this is my first server");
    }

    else if(req.url ==="/downloads" ){
        res.end("Hi this is my first download page");
        }

        else if(req.url ==="/data" ){
            res.end(objdata[0].email)
            }

        else{
            res.end("Page not found")
        }
    
})

server.listen(5000, ()=>{
    console.log("Server listening aaaat 5000")
})