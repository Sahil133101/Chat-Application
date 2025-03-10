import express from 'express';
import dotenv from 'dotenv';
import connectdB from './config/database.js';
import userRoute from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import msgRoute from "./routes/msgRoute.js";
dotenv.config({});
const app = express();
connectdB()
//middleware
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",msgRoute);
//http://localhost:8080/api/v1/user/register

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    connectdB();
    console.log(`listening on port ${PORT}`);
})