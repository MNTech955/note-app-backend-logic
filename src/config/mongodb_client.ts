
//MongoClient: A class from the MongoDB library that is used to connect to a MongoDB server.
//Db: A type from the MongoDB library that represents a MongoDB database.
import {MongoClient,Db} from "mongodb";

//A variable mongoDb of type Db is declared. This will hold the reference to the connected
// database instance and will be shared across the application.
let mongoDb : Db

//export: Makes the function accessible to other files that import this module.
//async: Declares the function as asynchronous, meaning it will handle asynchronous operations using await.
//The MongoDB connection string specifies the server (127.0.0.1) and the default port (27017).
//This points to a MongoDB instance running on your local machine.

export async function connectToDatabase(){
    const  url = 'mongodb://127.0.0.1:27017'
    //Creates a new MongoDB client instance using the connection string.
    const  client = new MongoClient(url);
    //Establishes a connection to the notedb database.
    mongoDb = client.db("notedb")
    console.log("mongodb connected successfully")
}
//A function to retrieve the mongoDb instance that was initialized earlier.
//
export function getDatabase() : Db{
    return mongoDb
}