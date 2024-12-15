import express from "express";

//request and response ke bech hai event trigger huga 
let appLogger = (request : express.Request,response : express.Response, next : express.NextFunction) => {


    const url = request.url;
    const method = request.method;
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString();

    const result : string = `${url} | ${method} | ${date} | ${time}`


    console.log(result);

    next();

}

export default appLogger;