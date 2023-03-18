import mongoose from "mongoose";
// import dotenv from 'dotenv';

// dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb://user:Metablock123@ac-ufjh4fs-shard-00-00.aeyebou.mongodb.net:27017,ac-ufjh4fs-shard-00-01.aeyebou.mongodb.net:27017,ac-ufjh4fs-shard-00-02.aeyebou.mongodb.net:27017/?ssl=true&replicaSet=atlas-12tjf6-shard-0&authSource=admin&retryWrites=true&w=majority`
const Connection = async()=>{
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true})
       console.log("database is connected")
    } catch (error) {
        console.log("Database is not connect",error.message)
    }
}

export default Connection;