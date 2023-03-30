function agecheck(req,res,next)
{
    if(req.query.age > 18){
        res.send("Access Granted");
    }

    else{
        res.send("Access Denied");
    }
}

module.exports= agecheck
