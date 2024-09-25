const { constants } = require("../constants")

function errorhandler(err,req,res,next){
    const statusCode = res.statusCode? res.statusCode : 500

    switch(statusCode){
        case constants.VALIDATION_ERROR:
            // console.log(err.stack)
            res.send({
                title: "Validation error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        
        case constants.UNAUTHORIZED_ERROR:
                // console.log(err.stack)
            res.send({
                title: "Unauthorized error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
                
        case constants.FORBIDDEN:
            // console.log(err.stack)
            res.send({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;

        case constants.NOT_FOUND:
            // console.log(err.stack)
            res.send({
                title: "NOT FOUND",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }

}

module.exports = errorhandler;