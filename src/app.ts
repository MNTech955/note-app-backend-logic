//Imports the express library, which is used to create a web server.
//express provides functionalities for handling HTTP requests, responses, and middleware.

import express from 'express';
//iski help se ham application mein data ko load karenge 
import cors from 'cors';
import {connectToDatabase} from "./config/mongodb_client"
import appLogger from "./middleware/app_logger"
import userRouter from "./router/user_router";
import noteRouter from './router/note_router';

//Creates an instance of an express application, which is the core of any Express.js project.
//The app object is used to define routes, middleware, and other configurations for the server.
const app : express.Application = express();
app.use(cors())
//hai hamre pass builtin middleware , iski ki help se jab ham request send karte hai tu iske 
//sat ham json data ko pass karte hai, isko ham access kar sakte hai apne application meim 
app.use(express.json())
app.use(appLogger)
app.use(express.urlencoded({extended:false}))
app.use("/v1/user", userRouter);
app.use("/v1/note", noteRouter);
//Defines the hostname (or IP address) for the server to bind to.
//"localhost" means the server will only be accessible from the local machine.
const hostName = "localhost";
//const hostName = "0.0.0.0";
//Defines the port number where the server will listen for incoming requests.
//5001 is the port your server will be running on.
const portNumber = 3000;


//Starts the Express.js server and begins listening for incoming requests on the specified hostname and port.
//portNumber and hostName tell the server where to bind.
//The third argument is a callback function that executes once the server starts successfully.

app.listen(portNumber,hostName,async ()=>{
    await connectToDatabase();
    console.log("Welcome to Note App backed Service ")
})