import express from "express";
import Connection from "./database/db.js";  //.js likhna compulsory
import Route from "./routes/route.js";
import cors from 'cors'
import bodyParser from "body-parser";

const app= express();

app.use(cors())  // localhost:3000 and 7000 ka ek hi path set karne ke liye barna browser par ye nhi chalega

app.use(bodyParser.json({extended:"true"}))     //iske bina res.body undified aayegi so we have to download a pakage body-parser
app.use(bodyParser.urlencoded({extended:"true"}))

app.use('/',Route)

Connection();



const PORT = 7000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})