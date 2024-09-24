function errohandler(err,req,res,next){
    const statusCode = statusCode? statusCode : 500
    res.json({message: "It is not working"})

}